import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = genMeta({
  title: "AI-Powered Resume Optimization",
  description: "Learn how to optimize your resume for specific job roles using Vihaya's AI Assistant. Enhance your resume summary, work experience, and skills automatically.",
  path: "/docs/ai/resume-optimization",
  keywords: ["AI resume", "resume optimization", "resume enhancement", "job application", "career", "AI assistant"],
});

export default function AIResumeOptimizationPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        AI Assistant
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        AI-Powered Resume Optimization
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Optimize your resume for specific job roles using AI. Enhance your professional summary, work experience descriptions, and reorder skills automatically.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            Vihaya's AI Assistant can optimize your existing resume for specific job roles. Instead of manually rewriting 
            your resume for each application, simply tell the AI what role you're targeting, and it will:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Rewrite your professional summary to highlight relevant experience</li>
            <li>Enhance work experience descriptions that match the target role</li>
            <li>Enhance project descriptions that are relevant to the role</li>
            <li>Reorder skills to prioritize those most relevant to the job</li>
            <li>Preserve all other data (education, certifications, etc.)</li>
          </ul>
        </div>

        <div>
          <h2 id="visual-walkthrough" className="text-2xl font-semibold mb-4">Visual Walkthrough</h2>
          <p className="mb-6 text-muted-foreground">
            Follow along with this step-by-step visual guide to see how AI resume optimization works in action.
          </p>
          
          <div className="space-y-8">
            {/* Steps 1 & 2: Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 1: Request Resume Optimization */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Request Resume Optimization</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Simply tell the AI what role you're targeting. For example, "Create a resume for me as a Flutter Developer" or "Optimize my resume for Software Engineer position". The AI will start processing your request immediately.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-resume-optimization-1.png" 
                    alt="Step 1: User requesting resume optimization in AI chat - 'Create a resume for me as a flutter developer' with AI processing status"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 2: AI Processing & Optimization */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">AI Processing & Success</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  The AI analyzes your existing resume, identifies relevant experiences and skills, and optimizes your resume. You'll see a detailed breakdown of what was improved and what was preserved, along with an "Open Resume Generator" button.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-resume-optimization-3.png" 
                    alt="Step 2: AI showing successful optimization with detailed breakdown of improvements and preserved sections"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Steps 3 & 4: Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 3: Resume Generator with AI Button */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">View Optimized Resume & Use Magical AI Buttons</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Open the Resume Generator to see your optimized resume. You'll notice the "✨ AI" button next to the "About Me" field, which allows you to further enhance specific sections. The notification banner confirms your resume has been optimized.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-resume-optimization-2.png" 
                    alt="Step 3: Resume Generator showing optimized resume with AI button next to About Me section and optimization notification"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 4: Work Experience with AI Button */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">Enhance Work Experience with AI</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  When adding or editing work experience entries, you'll find the "✨ AI" button next to the description field. Click it to automatically enhance your experience description with AI-powered improvements that make it more impactful and professional.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-resume-optimization-4.png" 
                    alt="Step 4: Work Experience section in Resume Generator showing the AI button next to the description field"
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
            <li><strong>Request optimization:</strong> Tell the AI your target role (e.g., "Create a resume for me as a Flutter Developer")</li>
            <li><strong>AI loads existing resume:</strong> AI automatically detects and loads your existing resume data from cache or Hive storage</li>
            <li><strong>AI analyzes and processes:</strong> The AI analyzes your resume, identifies relevant experiences and skills that match the target role, and starts optimizing</li>
            <li><strong>Real-time status updates:</strong> You'll see status messages like "Optimizing your resume..." and "I'm enhancing your resume descriptions, filtering relevant experiences, and optimizing it for your target role"</li>
            <li><strong>Optimizes content:</strong> AI rewrites your professional summary, enhances matching work experience and project descriptions, and reorders skills by relevance</li>
            <li><strong>Preserves all other data:</strong> All other fields (education, certifications, languages, awards, etc.) remain completely unchanged</li>
            <li><strong>Success notification:</strong> You receive a detailed breakdown showing what was improved and what was preserved, with an "Open Resume Generator" button</li>
            <li><strong>View and refine:</strong> Open the Resume Generator to see your optimized resume and use the magical AI buttons for further targeted enhancements</li>
          </ol>
        </div>

        <div>
          <h2 id="usage-examples" className="text-2xl font-semibold mb-4">Usage Examples</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Basic Optimization</h3>
              <code className="text-xs bg-muted px-2 py-1 rounded block mb-2">
                "Make my resume for Flutter Developer"
              </code>
              <p className="text-sm text-muted-foreground">
                Optimizes your resume for a Flutter Developer role. AI will enhance Flutter-related experiences and 
                prioritize Flutter skills.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Role-Specific Optimization</h3>
              <code className="text-xs bg-muted px-2 py-1 rounded block mb-2">
                "Optimize my resume for Software Engineer position"
              </code>
              <p className="text-sm text-muted-foreground">
                Tailors your resume for a Software Engineer role, highlighting relevant technical experience and skills.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Conversational Request</h3>
              <code className="text-xs bg-muted px-2 py-1 rounded block mb-2">
                "I want to apply for a Data Scientist role, can you help optimize my resume?"
              </code>
              <p className="text-sm text-muted-foreground">
                AI understands the intent and optimizes your resume for Data Science roles, emphasizing relevant 
                projects and skills.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="what-gets-optimized" className="text-2xl font-semibold mb-4">What Gets Optimized</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✅ Professional Summary (About Me)</h3>
              <p className="text-sm text-muted-foreground">
                Completely rewritten to highlight your experience relevant to the target role. Focuses on key achievements 
                and skills that match the job requirements.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✅ Work Experience Descriptions</h3>
              <p className="text-sm text-muted-foreground">
                Only experiences that match the target role are enhanced. Descriptions are rewritten to emphasize relevant 
                responsibilities and achievements. Non-matching experiences remain unchanged.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✅ Project Descriptions</h3>
              <p className="text-sm text-muted-foreground">
                Relevant projects are enhanced to better showcase skills and technologies used. Projects not relevant to 
                the role remain unchanged.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✅ Skills Order</h3>
              <p className="text-sm text-muted-foreground">
                Skills are reordered to prioritize those most relevant to the target role. All skills are preserved, 
                just reordered for better visibility.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="what-gets-preserved" className="text-2xl font-semibold mb-4">What Gets Preserved</h2>
          <p className="mb-4">
            The following data is <strong>never changed</strong> during optimization:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Personal information (name, email, phone, location)</li>
            <li>Education details</li>
            <li>Certifications</li>
            <li>Languages</li>
            <li>Awards</li>
            <li>Publications</li>
            <li>Volunteer work</li>
            <li>References</li>
            <li>Hobbies</li>
            <li>All work experiences (only descriptions of matching ones are enhanced)</li>
            <li>All projects (only descriptions of relevant ones are enhanced)</li>
            <li>All skills (only order is changed)</li>
          </ul>
        </div>

        <div>
          <h2 id="magical-ai-buttons" className="text-2xl font-semibold mb-4">Magical AI Buttons</h2>
          <p className="mb-4">
            In the Resume Generator, you'll find "✨ AI" buttons next to key fields that allow you to enhance specific sections on-demand:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✨ About Me / Professional Summary Enhancement</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Click the blue "✨ AI" button next to the "About Me / Professional Summary" field to get AI-generated professional summary suggestions based on your current resume data. This is perfect for refining your summary after the initial optimization.
              </p>
              <p className="text-sm text-muted-foreground">
                The AI analyzes all your work experience, projects, and skills to create a compelling professional summary that highlights your key strengths and achievements.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✨ Work Experience Description Enhancement</h3>
              <p className="text-sm text-muted-foreground mb-2">
                When editing a work experience entry, click the magical "✨ AI" button next to the description field to enhance it with AI-powered improvements.
              </p>
              <p className="text-sm text-muted-foreground">
                The AI will rewrite your experience description to be more impactful, use action verbs, quantify achievements, and better align with industry standards.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✨ Project Description Enhancement</h3>
              <p className="text-sm text-muted-foreground mb-2">
                When editing a project entry, click the magical "✨ AI" button next to the description field to get AI-enhanced project descriptions that better showcase your work.
              </p>
              <p className="text-sm text-muted-foreground">
                The AI will improve your project descriptions to highlight technologies used, key features, impact, and achievements in a more professional and compelling way.
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg border bg-primary/10">
            <p className="text-sm">
              <strong>💡 Pro Tip:</strong> Use the magical AI buttons for targeted enhancements after the initial full resume optimization. This gives you fine-grained control over which sections to improve.
            </p>
          </div>
        </div>

        <div>
          <h2 id="intelligent-detection" className="text-2xl font-semibold mb-4">Intelligent Request Detection</h2>
          <p className="mb-4">
            The AI acts as an intelligent agent that understands context, not just keywords:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">✅ Recognizes Actual Requests</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>"Make my resume for Flutter Developer" → Optimizes resume</li>
                <li>"Optimize resume for Software Engineer" → Optimizes resume</li>
                <li>"I want to apply for Data Scientist role" → Optimizes resume</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">❌ Distinguishes Questions</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>"What is a resume?" → Answers the question, doesn't create resume</li>
                <li>"How do I create a resume?" → Provides guidance, doesn't create resume</li>
                <li>"Tell me about resumes" → Explains resumes, doesn't create resume</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 id="best-practices" className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Have existing resume data:</strong> Make sure you have some resume data saved (the AI uses your existing resume as a base)</li>
            <li><strong>Be specific about the role:</strong> Mention the exact job title or role you're targeting</li>
            <li><strong>Review the changes:</strong> Always review the optimized resume and make manual adjustments if needed</li>
            <li><strong>Use for multiple roles:</strong> Optimize your resume separately for different roles you're applying to</li>
            <li><strong>Combine with manual edits:</strong> Use AI optimization as a starting point, then refine manually</li>
          </ul>
        </div>

        <div>
          <h2 id="workflow" className="text-2xl font-semibold mb-4">Typical Workflow</h2>
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li>Create or update your resume in the Resume Generator</li>
            <li>Save your resume (it's automatically cached)</li>
            <li>Open the AI Assistant</li>
            <li>Ask to optimize for a specific role (e.g., "Make my resume for Flutter Developer")</li>
            <li>Review the success message with optimization details</li>
            <li>Click "Open Resume Generator" to see the optimized resume</li>
            <li>Review and make any final adjustments</li>
            <li>Export or share your optimized resume</li>
          </ol>
        </div>

        <div>
          <h2 id="next-steps" className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="mb-4">
            After optimizing your resume:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Review all changes made by the AI</li>
            <li>Make any manual adjustments to better reflect your experience</li>
            <li>Use the magical AI buttons for further enhancements</li>
            <li>Export your resume in your preferred format</li>
            <li>Save different versions for different roles</li>
          </ul>
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

