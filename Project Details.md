# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Bengal Oud (`artifacts/bengal-oud`)
- **Type**: React + Vite web app
- **Preview path**: `/`
- **Port**: 24135
- **Description**: Luxury oud fragrance brand website. Dark luxury aesthetic with gold (#c9a84c) primary color, ivory/cream text, Playfair Display serif headings, Inter sans-serif body.
- **Homepage sections**: Hero (cinematic left-aligned), Brand Story (editorial 2-col with images), Founder, Investment, Delivery Counter, Products (with category filter), Collections, Why Choose, Testimonials, Gallery, Newsletter, Contact
- **Pages**: `/` (Home), `/collections` (Shop with filter), `/about` (Heritage + Founder + Timeline + Values), `/journal` (Press & Stories), `/faq` (Accordion FAQ with policies)
- **Navbar**: Fixed header with page route links (wouter Link) + anchor links for homepage sections + "Order Now" CTA button
- **Footer**: 5-column layout with newsletter inline, page links, social icons
- **Design direction**: Tom Ford-inspired dark luxury — editorial bottom-left hero, large serif headings, generous whitespace, gold (#c9a84c) accents on dark (#0a0a0a) background
- **Assets**: Logo and images in `attached_assets/` — accessed via `@assets/` alias pointing to `attached_assets/`
- **Local images**: Hero background, product images, gallery images, founder photo in `attached_assets/`
- **Key dependencies**: framer-motion (animations), wouter (routing), react-icons (WhatsApp/social icons), lucide-react

### API Server (`artifacts/api-server`)
- **Type**: Express API
- **Preview path**: `/api`
- **Description**: Backend Express server (currently minimal, only health check endpoint)
