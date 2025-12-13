import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = genMeta({
  title: "AI Commands",
  description: "Complete list of AI commands for Vihaya's AI Assistant. Learn commands for resume optimization, event creation, code compilation, and more.",
  path: "/docs/ai/commands",
  keywords: ["AI commands", "resume commands", "event creation commands", "code compiler", "AI shortcuts"],
});

export default function CommandsPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        AI Assistant
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        AI Commands
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Quick reference guide for all AI commands. Use these commands to interact with Vihaya's AI Assistant.
      </p>

      <div className="space-y-8 leading-7">
        {/* Resume Commands */}
        <div>
          <h2 id="resume-commands" className="text-2xl font-semibold mb-4">📄 Resume Commands</h2>
          <p className="mb-4 text-muted-foreground">
            Optimize your resume for specific job roles. AI will enhance your summary, work experience, and reorder skills.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Make my resume for Flutter Developer"
              </code>
              <p className="text-xs text-muted-foreground">Optimize resume for Flutter Developer role</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Optimize resume for Software Engineer"
              </code>
              <p className="text-xs text-muted-foreground">Tailor resume for Software Engineer position</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Make my resume for Data Scientist"
              </code>
              <p className="text-xs text-muted-foreground">Optimize for Data Science roles</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Resume for [Job Title]"
              </code>
              <p className="text-xs text-muted-foreground">Generic format - replace with your target role</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> The AI uses your existing resume data from cache. Make sure you have a resume saved first.
          </p>
        </div>

        {/* Event Creation Commands */}
        <div>
          <h2 id="event-commands" className="text-2xl font-semibold mb-4">🎉 Event Creation Commands</h2>
          <p className="mb-4 text-muted-foreground">
            Create events using natural language. Only Organizers, Admins, and Super Admins can create events.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Create an event"
              </code>
              <p className="text-xs text-muted-foreground">Create event with auto-filled defaults</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Create a Flutter Workshop"
              </code>
              <p className="text-xs text-muted-foreground">Create event with specific name/type</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Create event for hackathon"
              </code>
              <p className="text-xs text-muted-foreground">Create hackathon event</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Create Flutter Workshop with 200 rupees"
              </code>
              <p className="text-xs text-muted-foreground">Create event with price</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Create event with speakers and accommodation"
              </code>
              <p className="text-xs text-muted-foreground">Create event with special features</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Show event creation features"
              </code>
              <p className="text-xs text-muted-foreground">View all available event form features</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> Include details like price, location, date, and features in your request for better results.
          </p>
        </div>

        {/* Code Compiler Commands */}
        <div>
          <h2 id="compiler-commands" className="text-2xl font-semibold mb-4">💻 Code Compiler Commands</h2>
          <p className="mb-4 text-muted-foreground">
            Execute code directly in the chat. AI will provide code examples that you can run instantly.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Write Python code to sort a list"
              </code>
              <p className="text-xs text-muted-foreground">Get Python code example</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Run this code: [paste code]"
              </code>
              <p className="text-xs text-muted-foreground">Execute provided code</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Test this Java function"
              </code>
              <p className="text-xs text-muted-foreground">Get executable Java code</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Show me C++ example for binary search"
              </code>
              <p className="text-xs text-muted-foreground">Get runnable C++ code</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Execute this Python script"
              </code>
              <p className="text-xs text-muted-foreground">Run Python code directly</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Open compiler"
              </code>
              <p className="text-xs text-muted-foreground">Open the code compiler tool</p>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg border bg-primary/5">
            <p className="text-sm font-semibold mb-2">Supported Languages:</p>
            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
              <li>Python 3.10.0</li>
              <li>Java 15.0.2</li>
              <li>C++ 10.2.0</li>
              <li>C 10.2.0</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              💡 Code blocks in AI responses automatically show a "Run Code" button. Click it to execute!
            </p>
          </div>
        </div>

        {/* Study & Learning Commands */}
        <div>
          <h2 id="study-commands" className="text-2xl font-semibold mb-4">📚 Study & Learning Commands</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Explain [topic]"
              </code>
              <p className="text-xs text-muted-foreground">Get detailed explanation of a concept</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Explain like I'm a beginner"
              </code>
              <p className="text-xs text-muted-foreground">Simplified explanation</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Summarize this note"
              </code>
              <p className="text-xs text-muted-foreground">Create summary of current note</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Enhance this note"
              </code>
              <p className="text-xs text-muted-foreground">Improve note with AI suggestions</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "What is [concept]?"
              </code>
              <p className="text-xs text-muted-foreground">Quick definition and explanation</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Help me understand [topic]"
              </code>
              <p className="text-xs text-muted-foreground">Get step-by-step explanation</p>
            </div>
          </div>
        </div>

        {/* Question & Answer Commands */}
        <div>
          <h2 id="qa-commands" className="text-2xl font-semibold mb-4">❓ Question & Answer Commands</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "What is the difference between X and Y?"
              </code>
              <p className="text-xs text-muted-foreground">Compare two concepts</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "How does [process] work?"
              </code>
              <p className="text-xs text-muted-foreground">Understand a process or mechanism</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Why is [concept] important?"
              </code>
              <p className="text-xs text-muted-foreground">Learn importance and applications</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Give me examples of [topic]"
              </code>
              <p className="text-xs text-muted-foreground">Get practical examples</p>
            </div>
          </div>
        </div>

        {/* Problem Solving Commands */}
        <div>
          <h2 id="problem-commands" className="text-2xl font-semibold mb-4">🔧 Problem Solving Commands</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Help me solve this: [problem]"
              </code>
              <p className="text-xs text-muted-foreground">Get step-by-step solution</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Debug this code: [code]"
              </code>
              <p className="text-xs text-muted-foreground">Find and fix code errors</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "How do I implement [feature]?"
              </code>
              <p className="text-xs text-muted-foreground">Get implementation guidance</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "What's wrong with this approach?"
              </code>
              <p className="text-xs text-muted-foreground">Get feedback on your solution</p>
            </div>
          </div>
        </div>

        {/* Web Search Commands */}
        <div>
          <h2 id="web-search-commands" className="text-2xl font-semibold mb-4">🔍 Web Search Commands</h2>
          <p className="mb-4 text-muted-foreground">
            AI automatically searches the web for current information when needed. You can also trigger it explicitly.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "What's the latest news about [topic]?"
              </code>
              <p className="text-xs text-muted-foreground">Get current information from web</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Search for [query]"
              </code>
              <p className="text-xs text-muted-foreground">Explicit web search request</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "What happened today in [field]?"
              </code>
              <p className="text-xs text-muted-foreground">Get today's updates</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            💡 <strong>Auto-Search:</strong> AI automatically searches the web for questions about current events, latest news, or recent updates.
          </p>
        </div>

        {/* General Commands */}
        <div>
          <h2 id="general-commands" className="text-2xl font-semibold mb-4">💬 General Commands</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Translate to [language]"
              </code>
              <p className="text-xs text-muted-foreground">Translate response to another language</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Make it shorter/longer"
              </code>
              <p className="text-xs text-muted-foreground">Adjust response length</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Give me more details"
              </code>
              <p className="text-xs text-muted-foreground">Expand on previous response</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <code className="text-sm font-mono text-primary block mb-2">
                "Simplify this"
              </code>
              <p className="text-xs text-muted-foreground">Make explanation simpler</p>
            </div>
          </div>
        </div>

        {/* Command Tips */}
        <div className="p-6 rounded-lg border bg-primary/5">
          <h3 className="font-semibold mb-3">💡 Command Tips</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong>Be specific:</strong> Include relevant details for better results</li>
            <li>• <strong>Use natural language:</strong> No need for special syntax - just ask naturally</li>
            <li>• <strong>Follow up:</strong> Ask clarifying questions to dive deeper</li>
            <li>• <strong>Context matters:</strong> AI understands context from your notes and previous messages</li>
            <li>• <strong>Combine commands:</strong> You can combine multiple requests in one message</li>
          </ul>
        </div>

        {/* Related Links */}
        <div>
          <h2 id="related-links" className="text-2xl font-semibold mb-4">Related Documentation</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <a href="/docs/ai/event-creation" className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
              <h3 className="font-semibold mb-1">AI Event Creation</h3>
              <p className="text-sm text-muted-foreground">Learn more about creating events with AI</p>
            </a>
            <a href="/docs/ai/resume-optimization" className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
              <h3 className="font-semibold mb-1">Resume Optimization</h3>
              <p className="text-sm text-muted-foreground">Detailed guide for resume optimization</p>
            </a>
            <a href="/docs/ai/getting-started" className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
              <h3 className="font-semibold mb-1">Getting Started</h3>
              <p className="text-sm text-muted-foreground">Beginner's guide to using AI Assistant</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
