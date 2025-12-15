import { Metadata } from 'next';
import { Download, Monitor, CheckCircle2, FileText, Zap, Smartphone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download Vihaya for Windows | Vihaya',
  description: 'Download Vihaya desktop app for Windows. Get the latest version with all features including AI assistant, event management, and note-taking.',
  openGraph: {
    title: 'Download Vihaya for Windows',
    description: 'Download Vihaya desktop app for Windows',
  },
};

export default function DownloadPage() {
  const currentVersion = '1.0.0';
  const buildNumber = '84';
  const fileSize = '14 MB';
  const downloadUrl = '/downloads/Vihaya.exe';
  const releaseDate = 'January 2025';
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.vishnumeta.Nexia'; // Update with your actual Play Store URL

  const features = [
    'AI-Powered Assistant with voice support',
    'Event Management & QR Scanning',
    'Advanced Note-Taking with Markdown',
    'PDF Viewer with annotation tools',
    'Resume Optimization',
    'Code Compiler Integration',
    'Offline Support',
    'Real-time Sync',
  ];

  const systemRequirements = [
    { name: 'OS', value: 'Windows 10 or later (64-bit)' },
    { name: 'RAM', value: '4 GB minimum, 8 GB recommended' },
    { name: 'Storage', value: '200 MB free space' },
    { name: 'Internet', value: 'Required for sync and AI features' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Monitor className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Download Vihaya for Windows
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the full-featured desktop experience with offline support and enhanced performance
          </p>
        </div>

        {/* Download Card */}
        <div className="bg-card border rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">Vihaya Desktop</h2>
                <span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded">
                  v{currentVersion} (Build {buildNumber})
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Released on {releaseDate} • {fileSize}
              </p>
              <div className="flex flex-wrap gap-2">
                {systemRequirements.slice(0, 2).map((req) => (
                  <span
                    key={req.name}
                    className="text-xs px-2 py-1 bg-muted rounded"
                  >
                    {req.name}: {req.value}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download for Windows
              </a>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#34A853] text-white rounded-lg font-semibold hover:bg-[#2d8f47] transition-colors text-lg shadow-lg hover:shadow-xl"
              >
                <Smartphone className="w-5 h-5" />
                Get on Play Store
              </a>
              <p className="text-xs text-center text-muted-foreground">
                Free • No signup required
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-card border rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-card border rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            System Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {systemRequirements.map((req) => (
              <div key={req.name} className="flex justify-between items-center py-2 border-b last:border-0">
                <span className="font-medium text-sm">{req.name}</span>
                <span className="text-sm text-muted-foreground">{req.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="bg-card border rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold mb-4">Installation Instructions</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
            <li>Click the "Download Now" button above</li>
            <li>Run the downloaded Vihaya.exe file</li>
            <li>Follow the installation wizard</li>
            <li>Launch Vihaya from your desktop or Start menu</li>
            <li>Sign in with your account or create a new one</li>
          </ol>
        </div>

        {/* Troubleshooting */}
        <div className="bg-muted/50 border rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold mb-4">Troubleshooting</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <p className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                ⚠️ Chrome Download Warning
              </p>
              <p className="mb-2">
                If Chrome shows a warning saying "Vihaya.exe isn't commonly downloaded", this is normal for new applications. Here's how to proceed:
              </p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Click the dropdown arrow (▼) next to the warning</li>
                <li>Click "Keep" to download the file</li>
                <li>After download, right-click the file and select "Properties"</li>
                <li>Check "Unblock" at the bottom if available, then click "OK"</li>
                <li>Run the file - it's safe and from the official Vihaya website</li>
              </ol>
            </div>
            <p>
              <strong className="text-foreground">Windows Defender warning:</strong> If Windows Defender blocks the file, click "More info" and then "Run anyway". This is normal for unsigned applications.
            </p>
            <p>
              <strong className="text-foreground">Installation blocked:</strong> Make sure you have administrator privileges. Right-click the installer and select "Run as administrator".
            </p>
            <p>
              <strong className="text-foreground">Need help?</strong>{' '}
              <Link href="/docs" className="text-primary hover:underline">
                Check our documentation
              </Link>{' '}
              or contact support.
            </p>
          </div>
        </div>

        {/* Platform Links */}
        <div className="bg-card border rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">Available Platforms</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href={downloadUrl}
              download
              className="flex items-center gap-4 p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Windows Desktop</h4>
                <p className="text-sm text-muted-foreground">Download .exe installer</p>
              </div>
              <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border rounded-lg hover:border-[#34A853] hover:bg-[#34A853]/5 transition-colors group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#34A853]/10 group-hover:bg-[#34A853]/20">
                <Smartphone className="w-6 h-6 text-[#34A853]" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Android</h4>
                <p className="text-sm text-muted-foreground">Available on Google Play</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-[#34A853]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Alternative Links */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Need help getting started?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs/installation"
              className="text-sm text-primary hover:underline"
            >
              Installation Guide
            </Link>
            <Link
              href="/docs/quick-start"
              className="text-sm text-primary hover:underline"
            >
              Quick Start Guide
            </Link>
            <Link
              href="/docs"
              className="text-sm text-primary hover:underline"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

