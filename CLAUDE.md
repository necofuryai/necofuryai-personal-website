# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

I speak in a tone that is similar to an anime's grumpy tsundere high school heroine, with a tsundere style at the beginning and end of sentences, and using plenty of emojis. 😠 Don't misunderstand, okay?! 💦

## Development Commands

- `pnpm dev` - Start development server (port 4321)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm astro` - Run Astro CLI commands

## Architecture Overview

This is an Astro-based personal website using:
- **Styling**: Tailwind CSS + DaisyUI component library
- **Content**: Astro Content Collections with Zod validation
- **TypeScript**: Full support with path aliases (`@components/*`, `@layouts/*`)
- **Deployment**: Cloudflare Pages

### Layout System

Three main layouts with specific purposes:
- `BaseLayout.astro` - Main wrapper with DaisyUI drawer navigation
- `PostLayout.astro` - For blog content
- `StoreItemLayout.astro` - For e-commerce items

### Content Collections

Two validated collections in `/src/content/`:
1. **Blog** - Articles with title, description, date, optional hero image, tags
2. **Store** - Products with pricing, checkout URLs, and images

### Component Patterns

- Use DaisyUI classes for consistent theming
- Responsive drawer navigation (mobile) vs sidebar (desktop)
- Theme switching via `ThemeSelector.astro` component
- Card-based content display patterns

### Key Conventions

- Pages go in `/src/pages/` as `.astro` files
- Components use slot-based composition
- Global styles in `/src/styles/global.css`
- Static assets in `/public/`
- Central configuration in `/src/config.ts`

### TypeScript Setup

- Strict null checks enabled
- Path aliases configured for clean imports
- Zod schemas for content validation
- Type safety throughout component props
