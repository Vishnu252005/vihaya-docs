import Image from 'next/image';

export default function OrganizingNotesPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">Engineering Notes</div>
      <h1 className="text-4xl font-bold mb-4">Organizing Notes</h1>
      <p className="text-lg text-muted-foreground mb-8">Keep your notes organized and easy to find.</p>
      <div className="space-y-6 leading-7">
        <div id="modules-and-chapters">
          <h2 id="modules-and-chapters" className="text-2xl font-semibold mb-4">Modules and Chapters</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Notes are organized by modules and chapters within each subject. Each chapter displays the number of notes and PYQ (Previous Year Questions) files available, making it easy to see what content is available at a glance.
          </p>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Chapters are automatically sorted in numerical order (Chapter 1, Chapter 2, ..., Chapter 10, etc.) to ensure easy navigation through the course material.
          </p>
          
          <div className="my-6 flex justify-center">
            <div className="rounded-lg border overflow-hidden shadow-lg max-w-md">
              <Image
                src="/images/notes/mathematics-modules-list.png"
                alt="Mathematics modules list showing chapters organized in numerical order with notes and PYQ file counts"
                width={1080}
                height={1920}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        <div id="folders-and-categories">
          <h2 id="folders-and-categories" className="text-2xl font-semibold mb-4">Folders and Categories</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">Create folders to group related notes and organize by subject, course, or project.</p>
        </div>
        <div id="tags">
          <h2 id="tags" className="text-2xl font-semibold mb-4">Tags</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">Use tags to categorize notes across different folders for flexible organization.</p>
        </div>
        <div id="search-and-filter">
          <h2 id="search-and-filter" className="text-2xl font-semibold mb-4">Search and Filter</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">Quickly find notes using search and filter by tags, folders, or dates.</p>
        </div>
      </div>
    </div>
  );
}

