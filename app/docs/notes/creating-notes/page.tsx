export default function CreatingNotesPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Engineering Notes
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Creating Notes
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal">
        Learn how to create and format your engineering notes effectively.
      </p>

      <div className="space-y-6 leading-7">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Creating a New Note</h2>
          <p className="mb-4">
            To create a new note in Vihaya:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
            <li>Navigate to the Notes section</li>
            <li>Click the "New Note" button</li>
            <li>Enter a title for your note</li>
            <li>Start writing your content</li>
            <li>Save when done</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Writing with Markdown</h2>
          <p className="mb-4">
            Vihaya supports Markdown syntax for rich text formatting:
          </p>
          <div className="bg-muted p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
{`# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

\`inline code\`

[Link text](https://example.com)`}
            </pre>
          </div>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/notes/markdown" className="text-primary hover:underline">
              Markdown Support
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Adding Code Blocks</h2>
          <p className="mb-4">
            Include code snippets with syntax highlighting:
          </p>
          <div className="bg-muted p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
{`\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\``}
            </pre>
          </div>
          <p className="mb-4">
            Supported languages include Python, JavaScript, Java, C++, and many more.
          </p>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/notes/code-blocks" className="text-primary hover:underline">
              Code Blocks
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Adding Images</h2>
          <p className="mb-4">
            Include images in your notes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Drag and drop images directly into the editor</li>
            <li>Use Markdown syntax: <code className="bg-muted px-1 py-0.5 rounded">![alt text](image-url)</code></li>
            <li>Upload images from your device</li>
            <li>Images are automatically stored and optimized</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Organizing Your Notes</h2>
          <p className="mb-4">
            Keep your notes organized:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Folders:</strong> Create folders to group related notes</li>
            <li><strong>Tags:</strong> Add tags for easy categorization</li>
            <li><strong>Categories:</strong> Assign notes to specific categories</li>
            <li><strong>Favorites:</strong> Mark important notes as favorites</li>
          </ul>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/notes/organizing" className="text-primary hover:underline">
              Organizing Notes
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Using AI to Enhance Notes</h2>
          <p className="mb-4">
            Let AI help improve your notes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Summarize long notes automatically</li>
            <li>Expand on key points</li>
            <li>Fix grammar and spelling</li>
            <li>Add missing information</li>
            <li>Generate study questions</li>
          </ul>
          <p className="mt-4">
            Learn more about{" "}
            <a href="/docs/ai/note-enhancement" className="text-primary hover:underline">
              AI Note Enhancement
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

