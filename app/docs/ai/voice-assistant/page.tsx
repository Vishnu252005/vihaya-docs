import { generateMetadata as genMeta } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = genMeta({
  title: "Voice Assistant",
  description: "Interact with Vihaya AI using voice commands. Speak naturally and get voice responses. Perfect for hands-free learning and multitasking.",
  path: "/docs/ai/voice-assistant",
  keywords: ["voice assistant", "voice AI", "speech recognition", "voice commands", "hands-free AI", "voice chat"],
});

export default function VoiceAssistantPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        AI Assistant
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Voice Assistant
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Interact with Vihaya AI using natural voice commands. Speak your questions and get voice responses. Perfect for hands-free learning, multitasking, and accessibility.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            Vihaya Voice Assistant allows you to interact with AI using natural speech. Simply speak your questions, and the AI will respond with both text and voice. This feature is perfect for:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Hands-free learning while doing other tasks</li>
            <li>Accessibility for users who prefer voice interaction</li>
            <li>Multitasking - ask questions while working on other things</li>
            <li>Natural conversation flow with voice responses</li>
            <li>Learning pronunciation and language skills</li>
          </ul>
        </div>

        <div>
          <h2 id="visual-walkthrough" className="text-2xl font-semibold mb-4">Visual Walkthrough</h2>
          <p className="mb-6 text-muted-foreground">
            Follow along with this step-by-step visual guide to see how the Voice Assistant works.
          </p>
          
          <div className="space-y-8">
            {/* Step 1: Voice Interface */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Start Voice Conversation</h3>
              </div>
              <p className="text-muted-foreground">
                Open Vihaya Voice to start a voice conversation. The interface shows "Listening..." when ready to receive your voice input. You can speak naturally, just like talking to a person.
              </p>
              <div className="rounded-lg border bg-card overflow-hidden shadow-sm max-w-2xl mx-auto">
                <Image 
                  src="/images/ai/ai-voice-assistant-2.png" 
                  alt="Step 1: Vihaya Voice interface showing listening state and conversation history"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Steps 2 & 3: Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 2: Web Search Mode */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Web Search Mode</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  When you ask questions that require current information, the AI automatically activates "Web Search Mode" to find real-time answers from the internet. You'll see this indicated in the response.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-voice-assistant-1.png" 
                    alt="Step 2: Voice Assistant showing Web Search Mode with search results"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Step 3: Voice Response */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Voice Responses</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  The AI responds with both text and voice. You'll see "Speaking..." when the AI is reading the response aloud. Each message has a speaker icon that you can tap to replay the audio response.
                </p>
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <Image 
                    src="/images/ai/ai-voice-assistant-3.png" 
                    alt="Step 3: Voice Assistant showing voice responses with speaking state"
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
            <li><strong>Open Vihaya Voice:</strong> Navigate to the Voice Assistant from the AI section</li>
            <li><strong>Start speaking:</strong> Tap the microphone button or wait for "Listening..." prompt</li>
            <li><strong>Speak naturally:</strong> Ask your question or make your request in natural language</li>
            <li><strong>AI processes:</strong> The AI converts your speech to text and processes your request</li>
            <li><strong>Get response:</strong> AI responds with both text and voice - you'll see the text and hear the response</li>
            <li><strong>Continue conversation:</strong> Keep speaking to continue the conversation naturally</li>
            <li><strong>Replay audio:</strong> Tap the speaker icon on any message to replay the voice response</li>
          </ol>
        </div>

        <div>
          <h2 id="features" className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🎤 Natural Speech Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Advanced speech recognition technology understands natural language, accents, and conversational speech patterns.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🔊 Text-to-Speech Responses</h3>
              <p className="text-sm text-muted-foreground">
                AI responses are read aloud automatically, making it perfect for hands-free learning and accessibility.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🌐 Automatic Web Search</h3>
              <p className="text-sm text-muted-foreground">
                When you ask questions requiring current information, the AI automatically searches the web and provides real-time answers.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">💬 Conversation History</h3>
              <p className="text-sm text-muted-foreground">
                All your voice conversations are saved with both text and audio, allowing you to review and replay responses anytime.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🔄 Replay Audio</h3>
              <p className="text-sm text-muted-foreground">
                Tap the speaker icon on any AI message to replay the voice response, perfect for reviewing complex explanations.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">⚡ Real-time Processing</h3>
              <p className="text-sm text-muted-foreground">
                See "Thinking..." when AI is processing your question and "Speaking..." when it's reading the response aloud.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="use-cases" className="text-2xl font-semibold mb-4">Use Cases</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">📚 Hands-Free Learning</h3>
              <p className="text-sm text-muted-foreground">
                Study while doing other tasks - ask questions and listen to explanations without looking at the screen.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">♿ Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for users with visual impairments or those who prefer voice interaction over typing.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🚗 Commuting & Travel</h3>
              <p className="text-sm text-muted-foreground">
                Learn on the go - ask questions and listen to responses while commuting or traveling.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🌍 Language Learning</h3>
              <p className="text-sm text-muted-foreground">
                Practice pronunciation and improve language skills by speaking and listening to AI responses.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">💼 Multitasking</h3>
              <p className="text-sm text-muted-foreground">
                Get help while working on other tasks - perfect for busy schedules and productivity.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">🔍 Quick Information</h3>
              <p className="text-sm text-muted-foreground">
                Get instant answers to questions using voice - faster than typing, especially for quick queries.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="best-practices" className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Speak clearly:</strong> Enunciate your words clearly for better recognition accuracy</li>
            <li><strong>Use natural language:</strong> Speak as you would to a person - no need for special commands</li>
            <li><strong>Wait for prompts:</strong> Wait for "Listening..." before speaking to ensure your voice is captured</li>
            <li><strong>Check the text:</strong> Review the transcribed text to ensure your question was understood correctly</li>
            <li><strong>Use in quiet environments:</strong> Background noise can affect speech recognition accuracy</li>
            <li><strong>Replay when needed:</strong> Use the speaker icon to replay responses if you missed something</li>
            <li><strong>Ask follow-up questions:</strong> Continue the conversation naturally with voice commands</li>
          </ul>
        </div>

        <div>
          <h2 id="tips" className="text-2xl font-semibold mb-4">Pro Tips</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 1:</strong> The Voice Assistant works best in quiet environments. If recognition is poor, try speaking more clearly or moving to a quieter location.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 2:</strong> You can ask complex questions - the AI understands context and can handle multi-part questions naturally.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 3:</strong> Use voice for quick questions and text chat for detailed discussions. Both methods work seamlessly together.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-primary/10">
              <p className="text-sm">
                <strong>💡 Tip 4:</strong> The AI automatically activates web search when needed. You'll see "Web Search Mode" in responses that use real-time information.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 id="next-steps" className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="mb-4">
            Ready to start using the Voice Assistant?
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Open Vihaya Voice from the AI Assistant section</li>
            <li>Grant microphone permissions when prompted</li>
            <li>Start speaking your questions naturally</li>
            <li>Listen to AI responses and continue the conversation</li>
            <li>Explore all voice features and capabilities</li>
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

