export default function BestPracticesPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">AI Assistant</div>
      <h1 className="text-4xl font-bold mb-4">Best Practices</h1>
      <p className="text-lg text-muted-foreground mb-8">Tips and best practices for getting the most out of the AI Assistant.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Writing Effective Questions</h2>
          <p>Be specific, provide context, and ask follow-up questions for better results.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Using AI Suggestions</h2>
          <p>Review and refine AI suggestions before applying them to your notes.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Maximizing Learning</h2>
          <p>Use AI to generate study questions, create summaries, and identify knowledge gaps.</p>
        </div>
      </div>
    </div>
  );
}

