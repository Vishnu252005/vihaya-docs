export default function OrganizingNotesPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">Engineering Notes</div>
      <h1 className="text-4xl font-bold mb-4">Organizing Notes</h1>
      <p className="text-lg text-muted-foreground mb-8">Keep your notes organized and easy to find.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Folders and Categories</h2>
          <p>Create folders to group related notes and organize by subject, course, or project.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tags</h2>
          <p>Use tags to categorize notes across different folders for flexible organization.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Search and Filter</h2>
          <p>Quickly find notes using search and filter by tags, folders, or dates.</p>
        </div>
      </div>
    </div>
  );
}

