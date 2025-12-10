export default function NotesOverviewPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Engineering Notes
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Engineering Notes Overview
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Organize, manage, and enhance your engineering notes with Vihaya's powerful note-taking system.
      </p>

      <div className="space-y-6 leading-7">
        <div id="what-are-engineering-notes">
          <h2 className="text-2xl font-semibold mb-4">What are Engineering Notes?</h2>
          <p className="mb-4">
            Vihaya's Engineering Notes feature provides a comprehensive solution for taking, organizing, and managing 
            your technical notes. With support for markdown, code blocks, and powerful search capabilities, 
            you'll never lose important information again.
          </p>
        </div>

        <div id="key-features">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Markdown Support</h3>
              <p className="text-sm text-muted-foreground">
                Write notes using Markdown syntax. Support for headers, lists, links, images, and more.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Code Blocks</h3>
              <p className="text-sm text-muted-foreground">
                Add code snippets with syntax highlighting for multiple programming languages.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Organization</h3>
              <p className="text-sm text-muted-foreground">
                Organize notes into folders, add tags, and create custom categories.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Powerful Search</h3>
              <p className="text-sm text-muted-foreground">
                Find notes instantly with full-text search across all your content.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">AI Enhancement</h3>
              <p className="text-sm text-muted-foreground">
                Use AI to summarize, expand, or improve your notes automatically.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Sharing & Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Share notes with classmates or team members. Collaborate in real-time.
              </p>
            </div>
          </div>
        </div>

        <div id="getting-started">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">
            Ready to start taking notes? Here's how:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li>Navigate to the Notes section in your dashboard</li>
            <li>Click "Create New Note"</li>
            <li>Start writing using Markdown or the rich text editor</li>
            <li>Add code blocks, images, or other content</li>
            <li>Organize with folders and tags</li>
            <li>Save and access anytime</li>
          </ol>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/notes/creating-notes" className="text-primary hover:underline">
              creating notes
            </a>{" "}
            and{" "}
            <a href="/docs/notes/organizing" className="text-primary hover:underline">
              organizing your notes
            </a>.
          </p>
        </div>

        <div id="use-cases">
          <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Lecture Notes</h3>
              <p className="text-sm text-muted-foreground">
                Take comprehensive notes during lectures. Add code examples, diagrams, and important concepts.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Project Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Document your projects with detailed notes, code snippets, and implementation details.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Study Materials</h3>
              <p className="text-sm text-muted-foreground">
                Create study guides, formula sheets, and revision notes for exams.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Research Notes</h3>
              <p className="text-sm text-muted-foreground">
                Organize research findings, references, and insights in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
