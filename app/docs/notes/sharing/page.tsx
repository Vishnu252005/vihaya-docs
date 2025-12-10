export default function SharingPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">Engineering Notes</div>
      <h1 className="text-4xl font-bold mb-4">Sharing Notes</h1>
      <p className="text-lg text-muted-foreground mb-8">Share your notes with classmates and collaborate effectively.</p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sharing Options</h2>
          <p>Share via link, email, or direct collaboration with specific users.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Permissions</h2>
          <p>Control who can view, edit, or comment on your shared notes.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Collaboration</h2>
          <p>Real-time collaboration with multiple users on the same note.</p>
        </div>
      </div>
    </div>
  );
}

