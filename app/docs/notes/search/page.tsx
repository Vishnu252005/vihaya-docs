export default function SearchPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">Engineering Notes</div>
      <h1 className="text-4xl font-bold mb-4">Search & Filter</h1>
      <p className="text-lg text-muted-foreground mb-8">Find your notes quickly with powerful search and filter options.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Full-Text Search</h2>
          <p>Search across all your notes by content, title, or tags.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced Filters</h2>
          <p>Filter by folder, tags, date, or custom criteria.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Search Tips</h2>
          <p>Use quotes for exact phrases, operators for complex queries, and filters for precise results.</p>
        </div>
      </div>
    </div>
  );
}

