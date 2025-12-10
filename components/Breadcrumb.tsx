"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Generate breadcrumb from pathname
  const getBreadcrumbs = (): Array<{ name: string; href: string }> => {
    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbs: Array<{ name: string; href: string }> = [];
    
    if (paths.length === 0 || (paths.length === 1 && paths[0] === 'docs')) {
      return [{ name: 'Get Started', href: '/docs' }, { name: 'Introduction to Vihaya', href: '/docs' }];
    }
    
    // Map paths to readable names
    const pathMap: Record<string, string> = {
      'docs': 'Get Started',
      'installation': 'Installation',
      'quick-start': 'Quick Start',
      'features': 'Features',
      'notes': 'Engineering Notes',
      'ai-assistant': 'AI Assistant',
      'projects': 'Project Management',
      'events': 'Event Management',
      'productivity': 'Productivity Tools',
      'guides': 'Guides',
      'user-guide': 'User Guide',
      'organizer': 'Organizer Guide',
      'admin': 'Admin Guide',
      'api': 'API Reference',
      'authentication': 'Authentication',
      'endpoints': 'Endpoints',
      'security': 'Security',
      'faq': 'FAQ',
    };

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const name = pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
      breadcrumbs.push({ name, href: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="fixed top-14 left-0 right-0 h-12 bg-black border-b border-[#1f1f1f] z-40 flex items-center px-6">
      {/* Hamburger Menu Icon */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-white hover:text-gray-300 transition-colors p-2 mr-4"
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Breadcrumb Path */}
      <div className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-gray-500">›</span>
            )}
            <Link
              href={crumb.href}
              className={`${
                index === breadcrumbs.length - 1
                  ? 'text-white font-semibold'
                  : 'text-gray-400 hover:text-white transition-colors'
              }`}
            >
              {crumb.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

