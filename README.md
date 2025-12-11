# Vihaya Documentation Website

A modern, responsive Next.js documentation website for Vihaya - The ultimate engineering notes app, AI study assistant, and project/event management platform.

## Features

- 📚 Comprehensive documentation covering all Vihaya features
- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive - works on mobile, tablet, and desktop
- 🔍 Easy navigation with collapsible sidebar
- ⚡ Fast and optimized with Next.js 14 App Router
- 🌙 Dark mode support
- 📄 Multiple documentation sections:
  - Getting Started
  - Features (Notes, AI Assistant, Projects, Events, Productivity Tools)
  - User Guides (Student, Organizer, Admin)
  - API Reference
  - Security & Privacy
  - FAQ

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
vihaya-docs/
├── app/
│   ├── docs/              # Documentation pages
│   │   ├── features/      # Feature documentation
│   │   ├── guides/        # User guides
│   │   └── api/          # API reference
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   └── Sidebar.tsx       # Navigation sidebar component
└── public/               # Static assets
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Customization

### Adding New Pages

1. Create a new page in the appropriate directory under `app/docs/`
2. Add the page to the navigation in `components/Sidebar.tsx`

### Styling

Styles are configured in:
- `app/globals.css` - Global styles and CSS variables
- Tailwind configuration is inline with `@import "tailwindcss"`

### Content

All documentation content is in the `app/docs/` directory. Each page is a React component that you can edit directly.

## Deployment

This website can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting service** (after building with `npm run build`)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Vishnu252005/vihaya-docs)

## License

This documentation website is part of the Vihaya project.

## Support

For issues or questions about this documentation website, please contact the Vihaya team.