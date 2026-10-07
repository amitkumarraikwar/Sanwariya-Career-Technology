# Sanwariya Career Technology - Website Redesign

This is the official redesigned website for **Sanwariya Career Technology**, a free internship and career-training program based in Indore. The site is built with modern web technologies focusing on performance, SEO, accessibility, and a premium "EdTech" aesthetic.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with design tokens for primary/secondary colors)
- **Animations**: Framer Motion (respects `prefers-reduced-motion`)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Database**: MongoDB (optional connection for storing applications)
- **Components**: Mobile-first, fully responsive, semantic HTML

## Project Structure

- `/app` - Next.js App Router (pages, API routes, layout, SEO files)
- `/components` - Reusable React components (Navbar, Hero, Programs, etc.)
- `/data` - Single source of truth for all business data, content, and team info
- `/public` - Static assets, campus and expert photos, logos

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env.local` file in the root directory and configure the following variables (if using the native application form):
   ```env
   # MongoDB connection string for storing applications
   MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/sanwariya

   # Email notification settings (optional placeholder)
   NOTIFY_EMAIL=admin@sanwariya.in
   SMTP_HOST=smtp.example.com
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

## Key Features

- **SEO Optimized**: Dynamic `sitemap.ts`, `robots.ts`, proper OpenGraph and Twitter cards, JSON-LD structured data (`EducationalOrganization`).
- **Performance**: High Lighthouse scores via `next/image` optimization, deferred loading (`next/font`), and intelligent IntersectionObserver for animations (`FadeInOnScroll`, `CountUp`).
- **Modern Design**: Clean glassmorphism, sticky blurred navbar, animated bento grids, and a seamless auto-advancing testimonial carousel.
- **Accessibility**: WCAG AA contrast compliance, semantic HTML, visible focus states, and keyboard-navigable interactive elements.

## Content Management

All business data (programs, team, testimonials, stats, FAQs) is centralized in the `/data` directory. To update any content, simply edit the corresponding `.ts` file without needing to modify component code. This also lays the groundwork for future i18n support.
