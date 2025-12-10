export default function StudyAssistancePage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">AI Assistant</div>
      <h1 className="text-4xl font-bold mb-4">Study Assistance</h1>
      <p className="text-lg text-muted-foreground mb-8">Get help with your studies using AI-powered assistance.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Concept Explanations</h2>
          <p>Get detailed explanations of complex topics tailored to your level of understanding.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Problem Solving</h2>
          <p>Get step-by-step solutions to problems in math, programming, and engineering.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Study Planning</h2>
          <p>Get personalized study plans and recommendations based on your notes and goals.</p>
        </div>
      </div>
    </div>
  );
}

