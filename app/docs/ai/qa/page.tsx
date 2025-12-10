export default function QAPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">AI Assistant</div>
      <h1 className="text-4xl font-bold mb-4">Question & Answer</h1>
      <p className="text-lg text-muted-foreground mb-8">Ask questions and get accurate, detailed answers.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Asking Questions</h2>
          <p>Type your question in the AI chat interface and get instant answers.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow-up Questions</h2>
          <p>Ask follow-up questions to dive deeper into topics and clarify concepts.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Context-Aware Answers</h2>
          <p>AI understands context from your notes to provide relevant answers.</p>
        </div>
      </div>
    </div>
  );
}

