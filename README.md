# Vihaya Documentation Website

A modern, responsive Next.js documentation website for **Vihaya** - The ultimate engineering notes app, AI study assistant, and project/event management platform.

![Vihaya Documentation](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 📚 Documentation
- **Comprehensive Guides**: Complete documentation covering all Vihaya features
- **Event Management**: Detailed guides for creating, managing, and analyzing events
- **Engineering Notes**: Documentation for note-taking, markdown, and organization
- **AI Assistant**: Guides for using AI features, commands, event creation, resume optimization, and best practices
- **Organizer Tools**: Complete organizer profile and event management documentation

### 🎨 Design & UX
- **Modern UI**: Clean, professional design inspired by MakeMyPass documentation
- **Dark Mode**: Full dark mode support with system preference detection
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smart Navigation**: Collapsible sidebar with icons and nested menus
- **On This Page**: Sticky table of contents for easy page navigation
- **Search Ready**: Built-in search functionality with keyboard shortcuts (Ctrl+K)

### 🤖 Interactive Features
- **AI Chatbot**: Intelligent documentation assistant with knowledge base
- **Quick Questions**: Pre-defined questions for faster help
- **Document Links**: Direct links to relevant documentation in chatbot responses
- **Related Topics**: Suggested topics for deeper exploration

### ⚡ Performance & SEO
- **Fast Loading**: Optimized with Next.js 16 and Turbopack
- **Image Optimization**: AVIF and WebP support with proper sizing
- **SEO Optimized**: Complete metadata, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schemas for better search understanding
- **Sitemap**: Auto-generated sitemap.xml for all pages
- **Google Search Console**: Ready for verification and indexing
- **Robots.txt**: Properly configured for search engines

### 📄 Documentation Sections
- **Get Started**: Introduction, Installation, Quick Start
- **Event Management**: 
  - Event Overview & Organizer Profile
  - Creating Events & Configuration
  - Registration Management & Form Fields
  - Payment & Pricing (Razorpay)
  - QR Scanning & Check-In
  - In-Event Features & Analytics
  - Post Event Management
  - Child Events
- **Engineering Notes**: Overview, Creating, Organizing, Markdown, Code Blocks, Search, Sharing
- **AI Assistant**: Overview, Getting Started, AI Event Creation, Resume Optimization, Screenshot & Image Analysis, PDF Document Analysis, Voice Assistant, Commands

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9.0 or later (or **yarn** / **pnpm**)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vishnu252005/vihaya-docs.git
   cd vihaya-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_SITE_URL=https://docs.vihaya.app
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The development server uses **Turbopack** for faster builds and hot module replacement.

### Build

Build the production version:

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

### Start Production Server

```bash
npm start
```

Starts the production server on [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
vihaya-docs/
├── app/
│   ├── docs/                      # Documentation pages
│   │   ├── event-management/      # Event management docs
│   │   ├── notes/                 # Engineering notes docs
│   │   ├── ai/                    # AI Assistant docs
│   │   ├── event-overview/        # Event overview page
│   │   ├── installation/          # Installation guide
│   │   ├── quick-start/            # Quick start guide
│   │   ├── layout.tsx             # Docs layout with sidebar
│   │   └── page.tsx               # Docs homepage
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   └── sitemap.ts                 # Dynamic sitemap generation
├── components/
│   ├── Header.tsx                 # Top navigation header
│   ├── DocsSidebar.tsx            # Left navigation sidebar
│   ├── TableOfContents.tsx        # Right "On this page" sidebar
│   ├── TableOfContentsWrapper.tsx # Client wrapper for TOC
│   ├── DocsFooter.tsx             # Footer with feedback & navigation
│   ├── ChatBot.tsx                # AI documentation chatbot
│   ├── Logo.tsx                   # Logo component
│   └── theme-toggle.tsx           # Dark/light mode toggle
├── lib/
│   ├── metadata.ts                # Metadata helper functions
│   └── utils.ts                   # Utility functions
├── public/
│   ├── images/                    # Images and logos
│   └── robots.txt                 # Robots.txt for SEO
└── components/StructuredData.tsx  # JSON-LD structured data
```

## 🛠️ Technologies Used

### Core Framework
- **Next.js 16** - React framework with App Router and Turbopack
- **React 18** - UI library with Server Components
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **CSS Variables** - Dynamic theming support

### Features & Libraries
- **next/image** - Optimized image component
- **next/dynamic** - Code splitting and lazy loading
- **Intersection Observer** - For scroll-based features
- **React Hooks** - useState, useEffect, usePathname

### SEO & Performance
- **Next.js Metadata API** - Built-in SEO support
- **JSON-LD** - Structured data for search engines
- **Sitemap Generation** - Dynamic sitemap creation
- **Font Optimization** - Google Fonts with preconnect

## 🎨 Customization

### Adding New Documentation Pages

1. **Create a new page file**
   ```bash
   # Example: app/docs/event-management/new-feature/page.tsx
   ```

2. **Add metadata** (optional but recommended)
   ```typescript
   import { generateMetadata as genMeta } from "@/lib/metadata";
   import type { Metadata } from "next";

   export const metadata: Metadata = genMeta({
     title: "New Feature",
     description: "Description of the new feature",
     path: "/docs/event-management/new-feature",
     keywords: ["keyword1", "keyword2"],
   });
   ```

3. **Add to navigation** in `components/DocsSidebar.tsx`
   ```typescript
   {
     name: "Event Management",
     children: [
       // ... existing items
       { name: "New Feature", href: "/docs/event-management/new-feature" },
     ],
   }
   ```

4. **Update sitemap** in `app/sitemap.ts` (optional - will be auto-detected)

### Styling

- **Global Styles**: `app/globals.css` - CSS variables and global styles
- **Tailwind Config**: `tailwind.config.cjs` - Theme customization
- **Component Styles**: Inline Tailwind classes in components
- **Dark Mode**: Automatic via CSS variables and ThemeProvider

### Content Guidelines

- Use proper heading hierarchy (h1 → h2 → h3)
- Add `id` attributes to h2 headings for table of contents
- Include screenshot placeholders where needed
- Use semantic HTML elements
- Add descriptive alt text for images

### Chatbot Knowledge Base

To update the chatbot's knowledge:
- Edit `components/ChatBot.tsx`
- Add new entries to the `knowledgeBase` array
- Include relevant keywords, answers, and links

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vishnu252005/vihaya-docs)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Vercel will automatically detect Next.js and configure settings
4. Deploy!

### Other Platforms

- **Netlify**: Connect your GitHub repo and deploy
- **AWS Amplify**: Supports Next.js out of the box
- **Cloudflare Pages**: Static export or full Next.js support
- **Self-hosted**: Build with `npm run build` and serve with `npm start`

### Environment Variables

Set these in your deployment platform:

```env
NEXT_PUBLIC_SITE_URL=https://docs.vihaya.app
```

## 🔍 SEO Features

The website includes comprehensive SEO optimization:

- ✅ Google Search Console verification
- ✅ Complete metadata (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Auto-generated sitemap.xml
- ✅ robots.txt configuration
- ✅ Canonical URLs
- ✅ Image optimization
- ✅ Performance optimizations

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This documentation website is part of the Vihaya project.

## 💬 Support

- **Documentation Issues**: [GitHub Issues](https://github.com/Vishnu252005/vihaya-docs/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/Vishnu252005/vihaya-docs/discussions)
- **Vihaya App**: [vihaya.app](https://vihaya.app)

## 🙏 Acknowledgments

- Design inspired by [MakeMyPass Documentation](https://docs.makemypass.com)
- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)