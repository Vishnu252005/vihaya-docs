export default function MarkdownPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">Engineering Notes</div>
      <h1 className="text-4xl font-bold mb-4">Markdown Support</h1>
      <p className="text-lg text-muted-foreground mb-8">Complete guide to using Markdown in your notes.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Basic Syntax</h2>
          <p>Headers, bold, italic, lists, links, and more.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
          <p>Tables, task lists, blockquotes, and horizontal rules.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Code Formatting</h2>
          <p>Inline code and code blocks with syntax highlighting.</p>
        </div>
      </div>
    </div>
  );
}

