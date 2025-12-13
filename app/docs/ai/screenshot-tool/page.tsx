import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = genMeta({
  title: "Screenshot & Image Analysis Tool",
  description: "Learn how to capture screenshots, select specific areas, and send them to AI for analysis. Perfect for studying, note-taking, and understanding visual content.",
  path: "/docs/ai/screenshot-tool",
  keywords: ["screenshot tool", "image analysis", "AI image recognition", "visual learning", "screenshot selection", "image to AI"],
});

export default function ScreenshotToolPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        AI Assistant
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Screenshot & Image Analysis Tool
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Capture screenshots, select specific areas, and send them to AI for instant analysis. Perfect for studying educational content, understanding diagrams, and getting explanations about visual materials.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            Vihaya's Screenshot & Image Analysis Tool allows you to capture screenshots from any screen, select specific areas of interest, and send them directly to the AI Assistant for analysis. This feature is particularly useful for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Analyzing educational content and diagrams</li>
            <li>Understanding complex visual concepts</li>
            <li>Getting explanations about charts, graphs, and tables</li>
            <li>Extracting information from images</li>
            <li>Learning from visual materials in your notes or courses</li>
          </ul>
        </div>

        <div>
          <h2 id="visual-walkthrough" className="text-2xl font-semibold mb-4">Visual Walkthrough</h2>
          <p className="mb-6 text-muted-foreground">
            Follow along with this step-by-step visual guide to see how the screenshot tool works.
          </p>
          
          <div className="space-y-8">
            {/* Step 1: Content with Screenshot Tool */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Access Screenshot Tool</h3>
              </div>
              <p className="text-muted-foreground">
                When viewing educational content, notes, or any screen, you'll find floating action buttons on the right side. The screenshot tool (crop icon) allows you to select and capture specific areas of the screen.
              </p>
              <div className="rounded-lg border bg-card overflow-hidden shadow-sm max-w-2xl mx-auto">
                <Image 
                  src="/images/ai/ai-screenshot-tool-1.png" 
                  alt="Step 1: Educational content screen showing the screenshot tool floating action buttons"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Steps 2 & 3: Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 2: Select Area */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Select Area to Capture</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Tap the screenshot tool button to enter selection mode. Draw a rectangle around the area you want to capture. You can adjust the corners by dragging the handles to precisely select the content you want to analyze.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-screenshot-tool-2.png" 
                    alt="Step 2: Selecting a specific area from educational content using the screenshot tool"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 3: AI Analysis */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">AI Analyzes & Responds</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Once you capture and send the selected area, the AI automatically processes the image. You'll see "Processing image..." status, and then the AI provides a detailed analysis, explanation, or answers to your questions about the visual content.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-screenshot-tool-3.png" 
                    alt="Step 3: AI chat showing image analysis and detailed explanation of the captured content"
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
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li><strong>Open content:</strong> Navigate to any screen with content you want to analyze (notes, courses, PDFs, etc.)</li>
            <li><strong>Activate screenshot tool:</strong> Tap the crop/screenshot icon from the floating action buttons</li>
            <li><strong>Select area:</strong> Draw a rectangle around the specific area you want to capture</li>
            <li><strong>Adjust selection:</strong> Drag the corner handles to fine-tune your selection</li>
            <li><strong>Capture & send:</strong> Confirm your selection to capture the screenshot and send it to AI</li>
            <li><strong>AI processes:</strong> The AI analyzes the image and provides detailed explanations or answers</li>
            <li><strong>Ask follow-up questions:</strong> Continue the conversation to dive deeper into the content</li>
          </ol>
        </div>

        <div>
          <h2 id="use-cases" className="text-2xl font-semibold mb-4">Use Cases</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📚 Educational Content Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Capture diagrams, charts, or tables from your study materials and get detailed explanations from the AI.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🔬 Scientific Diagrams</h3>
              <p className="text-sm text-muted-foreground">
                Understand complex scientific diagrams, energy band structures, molecular diagrams, and more.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📊 Data Visualization</h3>
              <p className="text-sm text-muted-foreground">
                Analyze graphs, charts, and data visualizations to understand trends, patterns, and insights.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📝 Note Enhancement</h3>
              <p className="text-sm text-muted-foreground">
                Capture content from external sources and get AI-powered summaries, explanations, or improvements.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🧮 Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Capture math problems, equations, or formulas and get step-by-step solutions and explanations.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🌐 Web Content Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Capture screenshots from websites, articles, or online resources for instant analysis and understanding.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="features" className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✨ Precise Area Selection</h3>
              <p className="text-sm text-muted-foreground">
                Select exactly the area you want to analyze. Adjustable corner handles allow for pixel-perfect selection of content.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🤖 Intelligent AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                The AI can recognize text, diagrams, charts, tables, and visual elements, providing comprehensive explanations and insights.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">💬 Interactive Conversations</h3>
              <p className="text-sm text-muted-foreground">
                After the initial analysis, continue the conversation to ask follow-up questions, request clarifications, or dive deeper into specific aspects.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📱 Seamless Integration</h3>
              <p className="text-sm text-muted-foreground">
                Works seamlessly across all screens in the app - notes, courses, PDFs, and any other content you're viewing.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">⚡ Instant Processing</h3>
              <p className="text-sm text-muted-foreground">
                Screenshots are processed instantly. You'll see real-time status updates as the AI analyzes your image.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="best-practices" className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Select relevant areas:</strong> Focus on the specific content you want to understand rather than capturing entire screens</li>
            <li><strong>Ensure clarity:</strong> Make sure the selected area is clear and readable for better AI analysis</li>
            <li><strong>Be specific in questions:</strong> After sending the screenshot, ask specific questions to get targeted answers</li>
            <li><strong>Use for complex content:</strong> This tool is especially useful for diagrams, charts, and visual concepts that need explanation</li>
            <li><strong>Combine with text:</strong> You can send both images and text messages together for more context</li>
            <li><strong>Follow up:</strong> Don't hesitate to ask follow-up questions to deepen your understanding</li>
          </ul>
        </div>

        <div>
          <h2 id="example-workflow" className="text-2xl font-semibold mb-4">Example Workflow</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Scenario: Understanding Energy Bands</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>You're studying "Electronic Components" and come across a complex diagram showing energy band structures</li>
                <li>Tap the screenshot tool and select the area containing the energy band diagram</li>
                <li>Capture and send it to the AI</li>
                <li>AI analyzes the diagram and provides a detailed explanation of conduction bands, valence bands, and band gaps</li>
                <li>You ask follow-up questions like "What's the difference between conductors and semiconductors?"</li>
                <li>AI provides comprehensive answers with examples and comparisons</li>
              </ol>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Scenario: Analyzing Comparison Tables</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>You capture a comparison table showing differences between conductors, semiconductors, and insulators</li>
                <li>AI recognizes the table structure and provides a detailed breakdown of each comparison point</li>
                <li>You can ask for specific clarifications on any row or concept</li>
                <li>AI explains the technical terms and their practical implications</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 id="tips" className="text-2xl font-semibold mb-4">Pro Tips</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 1:</strong> For better results, capture high-quality, well-lit screenshots. The clearer the image, the better the AI can analyze it.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 2:</strong> If analyzing a large diagram, you can capture it in sections and ask the AI to explain each part separately.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 3:</strong> Combine screenshots with text questions for more context. For example, "Explain this diagram in the context of semiconductor physics."
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 4:</strong> Use this tool for quick learning sessions. Capture content from your notes or courses and get instant explanations without leaving the app.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="next-steps" className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="mb-4">
            Now that you understand the Screenshot & Image Analysis Tool:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Try capturing a screenshot from your notes or courses</li>
            <li>Experiment with different types of content (diagrams, tables, text)</li>
            <li>Ask follow-up questions to deepen your understanding</li>
            <li>Combine with other AI features like code compilation or web search</li>
          </ul>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/ai/getting-started" className="text-primary hover:underline">
              getting started with AI
            </a>
            ,{" "}
            <a href="/docs/ai/commands" className="text-primary hover:underline">
              AI commands
            </a>
            , and{" "}
            <a href="/docs/ai/overview" className="text-primary hover:underline">
              other AI features
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

