export default function AIGettingStartedPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        AI Assistant
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Getting Started with AI
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Start using Vihaya's AI Assistant to enhance your learning experience.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Accessing the AI Assistant</h2>
          <p className="mb-4">
            You can access the AI Assistant in multiple ways:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>From Dashboard:</strong> Click the AI Assistant icon in the main navigation</li>
            <li><strong>From Notes:</strong> Open any note and click "Ask AI" or use the AI button</li>
            <li><strong>Quick Access:</strong> Use the keyboard shortcut (Ctrl+K or Cmd+K)</li>
            <li><strong>Chat Interface:</strong> Open the chat panel from anywhere in the app</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Your First AI Interaction</h2>
          <p className="mb-4">
            Start with a simple question or request:
          </p>
          <div className="bg-muted p-4 rounded-lg mb-4">
            <p className="text-sm font-semibold mb-2">Example Questions:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>"Explain quantum computing in simple terms"</li>
              <li>"Help me understand recursion in programming"</li>
              <li>"Summarize this note"</li>
              <li>"What are the key points about machine learning?"</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Basic AI Commands</h2>
          <p className="mb-4">
            Use these commands to interact with the AI:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Ask Questions</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Simply type your question and get instant answers:
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                "What is the difference between REST and GraphQL?"
              </code>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Enhance Notes</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Ask AI to improve your notes:
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                "Enhance this note" or "Add more details to this section"
              </code>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Get Explanations</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Request explanations for complex topics:
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                "Explain [topic] like I'm a beginner"
              </code>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Solve Problems</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Get help with problem-solving:
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                "Help me solve this: [problem description]"
              </code>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Context-Aware Assistance</h2>
          <p className="mb-4">
            The AI Assistant understands context from your notes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>When viewing a note, AI can reference that note's content</li>
            <li>AI understands your note structure and organization</li>
            <li>Get suggestions based on your existing notes</li>
            <li>AI can help connect concepts across different notes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Be specific in your questions for better answers</li>
            <li>Provide context when asking about complex topics</li>
            <li>Use follow-up questions to dive deeper</li>
            <li>Review AI suggestions before applying them to your notes</li>
            <li>Use AI to generate study questions from your notes</li>
          </ul>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/ai/best-practices" className="text-primary hover:underline">
              Best Practices
            </a>.
          </p>
        </div>

        <div className="p-6 rounded-lg border bg-primary/5">
          <h3 className="font-semibold mb-2">Pro Tip</h3>
          <p className="text-sm text-muted-foreground">
            The AI Assistant learns from your notes and preferences. The more you use it, the better it becomes 
            at understanding your learning style and providing relevant assistance.
          </p>
        </div>
      </div>
    </div>
  );
}

