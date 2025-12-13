import Image from "next/image";

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
          <div className="mb-6 rounded-lg border bg-card overflow-hidden">
            <Image 
              src="/images/ai/ai-event-creation.png" 
              alt="Vihaya AI Assistant - Main interface showing how to interact with the AI"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div>
          <h2 id="what-is-the-ai-assistant" className="text-2xl font-semibold mb-4">What is the AI Assistant?</h2>
          <p className="mb-4">
            Vihaya's AI Assistant is your intelligent study companion that helps you learn faster, understand better, 
            and excel in your studies. Whether you need help with concepts, want to enhance your notes, 
            or have questions about your coursework, the AI Assistant is always ready to help.
          </p>
        </div>

        <div>
          <h2 id="key-features" className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Code Help & Compiler</h3>
              <p className="text-sm text-muted-foreground">
                Get help with programming concepts, debug code, understand algorithms, and execute code directly in the chat.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">AI-Powered Event Creation</h3>
              <p className="text-sm text-muted-foreground">
                Create events naturally using AI. Just describe your event and AI will auto-fill all details, handle permissions, and create it instantly.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Resume Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your resume for specific job roles. AI rewrites your summary, enhances experience descriptions, and reorders skills automatically.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Concept Explanations</h3>
              <p className="text-sm text-muted-foreground">
                Understand difficult topics with simplified explanations and examples.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Web Search Integration</h3>
              <p className="text-sm text-muted-foreground">
                Get real-time information from the web with automatic search for current events, news, and latest updates.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Screenshot & Image Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Capture screenshots, select specific areas, and send them to AI for instant analysis. Perfect for understanding diagrams, charts, and visual content.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">PDF Document Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Upload PDF documents and get instant summaries, overviews, and detailed analysis. Perfect for studying research papers, course materials, and technical documents.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Image Upload & Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Send images directly to AI for analysis. Get explanations, descriptions, and insights about photos, diagrams, educational content, and more.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Voice Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Interact with AI using natural voice commands. Speak your questions and get voice responses. Perfect for hands-free learning and accessibility.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="feature-showcase" className="text-2xl font-semibold mb-4">Feature Showcase</h2>
          
          <div className="space-y-8">
            {/* Web Search Feature */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">🌐 Web Search Integration</h3>
              <p className="text-muted-foreground">
                Get real-time information from the web with automatic search capabilities. The AI can search the internet to provide up-to-date answers, current events, and latest information.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-web-search-1.png" 
                    alt="Web Search feature - AI chat showing web search results with sources"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-web-search-2.png" 
                    alt="Web Search mode - AI providing answers with web sources and citations"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* PDF Analysis Feature */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">📄 PDF Document Analysis</h3>
              <p className="text-muted-foreground">
                Upload PDF documents and get comprehensive analysis including document overview, main sections, key points, and detailed summaries. Perfect for studying course materials, research papers, and technical documents.
              </p>
              <div className="rounded-lg border bg-card overflow-hidden shadow-sm max-w-2xl mx-auto">
                <Image 
                  src="/images/ai/ai-pdf-analysis-1.png" 
                  alt="PDF Analysis - AI processing and analyzing PDF documents with summaries"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Image Analysis Feature */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">🖼️ Image Upload & Analysis</h3>
              <p className="text-muted-foreground">
                Send images directly to the AI for instant analysis. Get detailed explanations, descriptions, and insights about educational content, diagrams, charts, photos, and any visual material.
              </p>
              <div className="rounded-lg border bg-card overflow-hidden shadow-sm max-w-2xl mx-auto">
                <Image 
                  src="/images/ai/ai-image-analysis-1.png" 
                  alt="Image Analysis - AI analyzing uploaded images and providing detailed explanations"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Voice Assistant Feature */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">🎤 Voice Assistant</h3>
              <p className="text-muted-foreground">
                Interact with AI using natural voice commands. Speak your questions and get voice responses with automatic web search when needed. Perfect for hands-free learning, accessibility, and multitasking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-voice-assistant-1.png" 
                    alt="Voice Assistant - Web Search Mode showing real-time search results"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-voice-assistant-2.png" 
                    alt="Voice Assistant - Listening state and conversation interface"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-voice-assistant-3.png" 
                    alt="Voice Assistant - Speaking state with voice responses"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 id="how-it-works" className="text-2xl font-semibold mb-4">How It Works</h2>
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
          <h2 id="use-cases" className="text-2xl font-semibold mb-4">Use Cases</h2>
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
          <h2 id="getting-started" className="text-2xl font-semibold mb-4">Getting Started</h2>
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
            </a>
            ,{" "}
            <a href="/docs/ai/event-creation" className="text-primary hover:underline">
              AI event creation
            </a>
            ,{" "}
            <a href="/docs/ai/resume-optimization" className="text-primary hover:underline">
              resume optimization
            </a>
            ,{" "}
            <a href="/docs/ai/screenshot-tool" className="text-primary hover:underline">
              screenshot & image analysis
            </a>
            ,{" "}
            <a href="/docs/ai/pdf-analysis" className="text-primary hover:underline">
              PDF document analysis
            </a>
            ,{" "}
            <a href="/docs/ai/voice-assistant" className="text-primary hover:underline">
              voice assistant
            </a>
            , and{" "}
            <a href="/docs/ai/commands" className="text-primary hover:underline">
              AI commands
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

