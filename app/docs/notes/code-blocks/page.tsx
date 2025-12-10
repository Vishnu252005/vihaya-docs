export default function CodeBlocksPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">Engineering Notes</div>
      <h1 className="text-4xl font-bold mb-4">Code Blocks</h1>
      <p className="text-lg text-muted-foreground mb-8">Add code snippets with syntax highlighting to your notes.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Supported Languages</h2>
          <p>Python, JavaScript, Java, C++, HTML, CSS, SQL, and many more programming languages.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Adding Code Blocks</h2>
          <p>Use triple backticks with language identifier for syntax highlighting.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Code Features</h2>
          <p>Copy code, line numbers, and code folding for better readability.</p>
        </div>
      </div>
    </div>
  );
}

