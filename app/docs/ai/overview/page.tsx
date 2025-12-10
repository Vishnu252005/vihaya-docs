export default function AIOverviewPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        AI Assistant
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        AI Assistant Overview
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Enhance your learning and productivity with Vihaya's intelligent AI assistant.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What is the AI Assistant?</h2>
          <p className="mb-4">
            Vihaya's AI Assistant is your intelligent study companion that helps you learn faster, understand better, 
            and excel in your studies. Whether you need help with concepts, want to enhance your notes, 
            or have questions about your coursework, the AI Assistant is always ready to help.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Study Assistance</h3>
              <p className="text-sm text-muted-foreground">
                Get explanations, solve problems, and understand complex concepts with AI-powered assistance.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Note Enhancement</h3>
              <p className="text-sm text-muted-foreground">
                Automatically improve, summarize, or expand your notes with AI suggestions.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Question & Answer</h3>
              <p className="text-sm text-muted-foreground">
                Ask any question and get detailed, accurate answers tailored to your needs.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Code Help</h3>
              <p className="text-sm text-muted-foreground">
                Get help with programming concepts, debug code, and understand algorithms.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Concept Explanations</h3>
              <p className="text-sm text-muted-foreground">
                Understand difficult topics with simplified explanations and examples.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Learning Paths</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized learning recommendations based on your notes and goals.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="mb-4">
            The AI Assistant integrates seamlessly with your notes and events:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li>Access the AI Assistant from any note or directly from the dashboard</li>
            <li>Ask questions or request assistance with your content</li>
            <li>Get instant, accurate responses tailored to your context</li>
            <li>Use AI suggestions to enhance your notes automatically</li>
            <li>Learn from explanations and examples provided</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Understanding Concepts</h3>
              <p className="text-sm text-muted-foreground">
                Struggling with a difficult topic? Ask the AI to explain it in simpler terms with examples.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Note Improvement</h3>
              <p className="text-sm text-muted-foreground">
                Let AI enhance your notes by adding missing information, correcting errors, or improving structure.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Get step-by-step solutions to problems in math, programming, or engineering.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Study Planning</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized study plans and recommendations based on your notes and upcoming exams.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">
            Ready to use the AI Assistant? Here's how:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li>Open any note or navigate to the AI Assistant section</li>
            <li>Type your question or request in the chat interface</li>
            <li>Review the AI's response and follow up if needed</li>
            <li>Use AI suggestions to enhance your notes</li>
            <li>Explore different AI commands and features</li>
          </ol>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/ai/getting-started" className="text-primary hover:underline">
              getting started with AI
            </a>{" "}
            and{" "}
            <a href="/docs/ai/commands" className="text-primary hover:underline">
              AI commands
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

