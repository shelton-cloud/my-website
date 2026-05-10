# Project Overview: Bryan Shelton Portfolio

This is a modern, high-performance personal portfolio website for Bryan Shelton, a Lead IT/AV Professional at Riot Games. The project is designed for rapid iteration ("vibe coding") and is deployment-ready for platforms like Vercel or as a containerized application via Docker.

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/postcss`)
- **Language:** TypeScript
- **Deployment:** Docker (Alpine base) & Docker Compose
- **Analytics:** @vercel/analytics

## 📂 Project Structure

- `src/app/`: Next.js App Router structure.
  - `page.tsx`: The main landing page with a hero section and navigation "bubbles".
  - `resume/`, `projects/`, `contact/`: Route-specific pages.
- `src/components/`: Reusable UI components (Header, Footer, Section-specific components).
- `src/data/profile.ts`: **The Source of Truth.** Almost all content displayed on the site is pulled from this file.
- `public/`: Assets like `bryan-photo.jpg` and musical tracks (`goodeco.mp3`, etc.).

## 🚀 Building and Running

### Development
```bash
npm install
npm run dev
```
Accessible at `http://localhost:3000`.

### Production Build
```bash
npm run build
npm run start
```

### Docker
```bash
docker-compose up -d --build
```
Runs the application in a production-ready standalone mode using `node:22-alpine`.

## 📜 Development Conventions

### Content Updates
To update bio, experience, skills, or contact info, **only modify `src/data/profile.ts`**. The UI components are built to dynamically reflect these changes.

### Styling
- Uses **Tailwind CSS v4**.
- Prefer utility classes for rapid styling.
- Responsive design: The layout transitions from a centered column on mobile to a multi-column horizontal layout on desktop.

### Components
- Functional components using React 19.
- Use `"use client"` directive for components requiring interactivity (e.g., `Header.tsx`, `MusicPlayer.tsx`).

## 🎯 Key Files
- `src/data/profile.ts`: Primary data configuration.
- `src/app/page.tsx`: Main entry point.
- `Dockerfile`: Production build instructions.
- `next.config.ts`: Next.js specific configuration (standalone output enabled in Docker).
