import { Suspense } from "react";
import Header from "@/components/Header";
import DocsSidebar from "@/components/DocsSidebar";
import DocsFooter from "@/components/DocsFooter";
import DocsToolbar from "@/components/DocsToolbar";
import TableOfContentsWrapper from "@/components/TableOfContentsWrapper";
import ChatBotWrapper from "@/components/ChatBotWrapper";
import { DOCS_URL } from "@/lib/agent-context";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <Header />
      <DocsSidebar />

      <main className="ml-0 min-h-[calc(100vh-4rem)] pb-16 pr-0 pt-16 md:ml-64 xl:pr-64">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <DocsToolbar llmsFullUrl={`${DOCS_URL}/llms-full.txt`} />

          {/* `data-docs-content` is the root CopyForAI serialises. Keep it on the
              element that holds the page body and nothing else.

              ⚠️ THE `prose-a` AND `prose-code` OVERRIDES ARE LOAD-BEARING.
              Typography underlines every <a> and adds quote marks around inline
              <code>, which drew underlines through the card links on every page.
              The pages style their own links, so prose keeps only list and
              paragraph rhythm.

              ⚠️ CODE BLOCKS OPT OUT WITH `not-prose` ON THE COMPONENT, NOT WITH
              A `prose-pre:` OVERRIDE HERE. `prose-pre:bg-transparent` wins on
              specificity over the component's own `bg-[#0b0f14]`, so it silently
              stripped the dark background off every code block instead of just
              suppressing the one prose adds. */}
          <article
            data-docs-content
            className="prose prose-slate max-w-none py-2 prose-headings:scroll-mt-32 prose-a:font-normal prose-a:no-underline prose-code:before:content-none prose-code:after:content-none dark:prose-invert"
          >
            {children}
          </article>

          <DocsFooter />
        </div>
      </main>

      <Suspense fallback={null}>
        <TableOfContentsWrapper />
      </Suspense>
      <Suspense fallback={null}>
        <ChatBotWrapper />
      </Suspense>
    </div>
  );
}
