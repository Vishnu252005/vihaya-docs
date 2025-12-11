import { Suspense } from "react";
import Header from "@/components/Header";
import DocsSidebar from "@/components/DocsSidebar";
import DocsFooter from "@/components/DocsFooter";
import TableOfContentsWrapper from "@/components/TableOfContentsWrapper";
import ChatBotWrapper from "@/components/ChatBotWrapper";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 w-full overflow-x-hidden">
      <Header />
      <DocsSidebar />
      <main className="ml-0 md:ml-64 pt-16 min-h-[calc(100vh-4rem)] pb-16 pr-0 xl:pr-64">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20">
            {children}
          </div>
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
