export default function CommandsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">AI Assistant</div>
      <h1 className="text-4xl font-bold mb-4">AI Commands</h1>
      <p className="text-lg text-muted-foreground mb-8">Learn all available AI commands and how to use them.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Basic Commands</h2>
          <p>Common commands for everyday use: summarize, explain, enhance, and more.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced Commands</h2>
          <p>Powerful commands for complex tasks: generate questions, create study plans, analyze content.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Command Syntax</h2>
          <p>Learn the proper syntax and formatting for AI commands.</p>
        </div>
      </div>
    </div>
  );
}

