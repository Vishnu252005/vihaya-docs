import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = genMeta({
  title: "PDF Document Analysis",
  description: "Upload PDF documents and get instant summaries, overviews, and detailed analysis. Perfect for studying research papers, course materials, and technical documents.",
  path: "/docs/ai/pdf-analysis",
  keywords: ["PDF analysis", "document analysis", "PDF summarization", "document summarization", "PDF AI", "document AI"],
});

export default function PDFAnalysisPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        AI Assistant
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        PDF Document Analysis
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Upload PDF documents and get instant summaries, overviews, and detailed analysis. Perfect for studying research papers, course materials, and technical documents.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            Vihaya's PDF Document Analysis feature allows you to upload PDF files and get comprehensive AI-powered analysis. The AI extracts text from your PDF, analyzes the content, and provides detailed summaries, overviews, and key insights. This feature is perfect for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Studying course materials and textbooks</li>
            <li>Analyzing research papers and academic documents</li>
            <li>Understanding technical documentation</li>
            <li>Getting quick summaries of long documents</li>
            <li>Extracting key points from reports and articles</li>
            <li>Reviewing multiple documents efficiently</li>
          </ul>
        </div>

        <div>
          <h2 id="visual-example" className="text-2xl font-semibold mb-4">Visual Example</h2>
          <p className="mb-6 text-muted-foreground">
            See how PDF analysis works in action:
          </p>
          <div className="rounded-lg border bg-card overflow-hidden shadow-sm max-w-2xl mx-auto">
            <Image 
              src="/images/ai/ai-pdf-analysis-1.png" 
              alt="PDF Analysis - AI processing and analyzing PDF documents with summaries and overview"
              width={600}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <h2 id="how-it-works" className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li><strong>Upload PDF:</strong> Attach a PDF file to your AI chat message using the attachment button</li>
            <li><strong>AI processes:</strong> The AI extracts text from the PDF and analyzes the content</li>
            <li><strong>Processing status:</strong> You'll see "Processing PDF: [filename]" with an estimated time</li>
            <li><strong>Get analysis:</strong> The AI provides a comprehensive analysis including:
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>Document overview and summary</li>
                <li>Main sections and topics covered</li>
                <li>Key points and important information</li>
                <li>Structured breakdown of content</li>
              </ul>
            </li>
            <li><strong>Ask questions:</strong> Continue the conversation to ask specific questions about the document</li>
            <li><strong>Get details:</strong> Request more information about specific sections or topics</li>
          </ol>
        </div>

        <div>
          <h2 id="features" className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📄 Automatic Text Extraction</h3>
              <p className="text-sm text-muted-foreground">
                The AI automatically extracts text from PDF files, handling various formats and layouts including scanned documents (with OCR support).
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📊 Comprehensive Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Get detailed analysis including document overview, main sections, key topics, and important points - all structured for easy understanding.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">⚡ Fast Processing</h3>
              <p className="text-sm text-muted-foreground">
                Processing time is estimated based on document size. Small documents (under 1MB) process in about 30 seconds, while larger documents may take a few minutes.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">💬 Interactive Q&A</h3>
              <p className="text-sm text-muted-foreground">
                After the initial analysis, ask specific questions about the document. The AI understands the context and provides detailed answers.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📋 Structured Summaries</h3>
              <p className="text-sm text-muted-foreground">
                Get well-organized summaries with clear sections, making it easy to understand complex documents quickly.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🔍 Section Breakdown</h3>
              <p className="text-sm text-muted-foreground">
                The AI identifies and lists all main sections in the document, helping you navigate and understand the structure.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="use-cases" className="text-2xl font-semibold mb-4">Use Cases</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📚 Academic Research</h3>
              <p className="text-sm text-muted-foreground">
                Analyze research papers, journal articles, and academic documents to quickly understand key findings and methodologies.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📖 Course Materials</h3>
              <p className="text-sm text-muted-foreground">
                Get summaries of textbooks, lecture notes, and course readings to study more efficiently.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📄 Technical Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Understand complex technical manuals, API documentation, and specification documents quickly.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📊 Business Reports</h3>
              <p className="text-sm text-muted-foreground">
                Analyze business reports, financial documents, and market research to extract key insights and trends.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📝 Legal Documents</h3>
              <p className="text-sm text-muted-foreground">
                Get summaries of legal documents, contracts, and policy papers to understand key terms and conditions.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🔬 Scientific Papers</h3>
              <p className="text-sm text-muted-foreground">
                Understand scientific papers, research studies, and experimental results with detailed analysis and explanations.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="best-practices" className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Use clear filenames:</strong> Name your PDF files descriptively so you can easily identify them</li>
            <li><strong>Check file size:</strong> Large PDFs (over 50MB) may take longer to process. Consider splitting very large documents</li>
            <li><strong>Wait for processing:</strong> Allow the AI to complete the analysis before asking follow-up questions</li>
            <li><strong>Ask specific questions:</strong> After getting the overview, ask targeted questions about sections you want to understand better</li>
            <li><strong>Review the summary:</strong> Read the document overview first to get a high-level understanding</li>
            <li><strong>Use for multiple documents:</strong> Upload and analyze multiple PDFs to compare and contrast information</li>
            <li><strong>Combine with other features:</strong> Use PDF analysis along with web search for comprehensive research</li>
          </ul>
        </div>

        <div>
          <h2 id="processing-times" className="text-2xl font-semibold mb-4">Processing Times</h2>
          <p className="mb-4">
            Processing time depends on the size and complexity of your PDF:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Small Documents (&lt; 1MB)</h3>
              <p className="text-sm text-muted-foreground">
                Typically processed in about 30 seconds. Perfect for short articles, single-page documents, and brief reports.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Medium Documents (1-5MB)</h3>
              <p className="text-sm text-muted-foreground">
                Usually takes 1-2 minutes. Suitable for research papers, chapter-length documents, and detailed reports.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Large Documents (5-15MB)</h3>
              <p className="text-sm text-muted-foreground">
                May take 2-3 minutes. Good for textbooks, comprehensive reports, and multi-chapter documents.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Very Large Documents (15-30MB)</h3>
              <p className="text-sm text-muted-foreground">
                Can take 3-5 minutes. Suitable for full books, extensive documentation, and large collections of content.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Maximum Size</h3>
              <p className="text-sm text-muted-foreground">
                PDFs up to 50MB are supported. Documents larger than 50MB should be split into smaller files.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="tips" className="text-2xl font-semibold mb-4">Pro Tips</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 1:</strong> For best results, use PDFs with selectable text rather than scanned images. If you have scanned PDFs, ensure they have OCR (Optical Character Recognition) applied.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 2:</strong> After getting the initial analysis, ask specific questions like "What are the main conclusions?" or "Explain section 3 in detail" for deeper insights.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 3:</strong> Use PDF analysis to quickly review multiple documents. Upload several PDFs and ask the AI to compare them or find common themes.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 4:</strong> Combine PDF analysis with other AI features. For example, ask the AI to explain concepts from the PDF in simpler terms or create study questions based on the content.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="next-steps" className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="mb-4">
            Ready to analyze PDF documents?
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Open the AI Assistant chat interface</li>
            <li>Click the attachment button (📎) to upload a PDF file</li>
            <li>Wait for the AI to process and analyze the document</li>
            <li>Review the summary and overview provided</li>
            <li>Ask specific questions about the document content</li>
            <li>Use the insights for your studies, research, or work</li>
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

