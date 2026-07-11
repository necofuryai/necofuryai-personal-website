# 🐱 NecoFuryAI Personal Website

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat-square&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)](https://daisyui.com)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

![Infrastructure](necofuryai-personal-website.png)

> A modern, type-safe personal portfolio website built with Astro 7, Tailwind CSS 4, and DaisyUI 5. The site is optimized for static deployment on Cloudflare Pages and for low-risk dependency updates through Renovate.

## 🙏 Template Credits

This project is built upon the excellent [**Astrofy**](https://github.com/manuelernestog/astrofy) template by [Manuel Ernesto Garcia](https://github.com/manuelernestog). Astrofy is a free and open-source template for personal portfolio websites built with Astro and TailwindCSS, providing features like Blog, CV, Project Section, Store, and RSS Feed.

**Original Template**: [github.com/manuelernestog/astrofy](https://github.com/manuelernestog/astrofy)  
**License**: MIT License  
**Author**: Manuel Ernesto Garcia

## 🚀 Quick Start

### Prerequisites

- **Node.js** 24+ and **pnpm** 11+
- Corepack enabled so the repository's `packageManager` field can select the expected pnpm version
- Basic familiarity with Astro and TypeScript

### Installation

```bash
# Clone the repository
git clone https://github.com/necofuryai/necofuryai-personal-website.git
cd necofuryai-personal-website

# Install dependencies
corepack enable
pnpm install --frozen-lockfile

# Start development server
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.

## 🛠 Development Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 4321 |
| `pnpm build` | Build for production with optimizations |
| `pnpm preview` | Preview production build locally |
| `pnpm astro` | Run Astro CLI commands |
| `pnpm test:vrt` | Run Playwright visual regression tests (baselines are CI-generated; never update snapshots locally) |

## 🏗 Technical Architecture

### Core Technologies
- **🚀 Astro 7**: Modern meta-framework with static output and islands architecture
- **📘 TypeScript**: Full type safety with strict null checks
- **🎨 Tailwind CSS 4**: Utility-first CSS framework wired through `@tailwindcss/vite`
- **🧩 DaisyUI 5**: Component library configured from the CSS entrypoint
- **📝 MDX Support**: Rich Markdown content for blog and store collections
- **⚡ Cloudflare Pages**: Edge-optimized global deployment

### Performance Features
- **Zero-JS by default**: Astro's islands architecture for optimal performance
- **Automatic optimization**: Static build output with Sharp image support
- **RSS & Sitemap**: SEO-friendly content distribution
- **Progressive enhancement**: JavaScript only where needed

### Content Management
- **Content Collections**: Type-safe content with Zod validation
- **Dynamic routing**: File-based routing with TypeScript support
- **Theme system**: Dark/light mode with DaisyUI theming

## 📁 Project Structure

```
necofuryai-personal-website/
├── .github/workflows/         # Dependency gate (build/smoke + VRT + Lighthouse), weekly develop→main promotion, VRT baseline updates, post-deploy smoke check
├── public/                    # Static assets & favicons
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── cv/              # CV-specific components
│   │   └── *.astro          # Core components (Header, Footer, etc.)
│   ├── content/             # Content collections with schemas
│   ├── layouts/             # Page layout templates
│   │   ├── BaseLayout.astro # Main layout with drawer navigation
│   │   ├── PostLayout.astro # Blog post layout
│   │   └── StoreItemLayout.astro # E-commerce item layout
│   ├── pages/               # File-based routing
│   ├── styles/              # Tailwind CSS 4 & DaisyUI 5 CSS entry
│   └── lib/                 # Utility functions & helpers
├── tests/vrt/                # Playwright visual regression tests & CI-generated baselines
├── memory-bank/              # Project documentation & context
├── astro.config.mjs         # Astro configuration
├── playwright.config.ts     # Playwright VRT configuration (baselines are CI-only)
├── lighthouserc.json        # Lighthouse CI advisory thresholds
├── .node-version            # Cloudflare Pages / local Node.js version
├── pnpm-workspace.yaml      # pnpm build script allowlist (esbuild, sharp) for pnpm 10 & 11
├── renovate.json            # Renovate dependency management config
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Key Features

### 🖥 Pages
- **Portfolio Homepage**: Showcasing skills and recent projects
- **Interactive CV**: Professional resume with timeline component
- **Project Gallery**: Technical project showcases with details
- **Hobbies**: Personal interests with embedded media
- **Personal PR**: Professional brand presentation

### 🧩 Components
- **Responsive Navigation**: Drawer-based mobile navigation
- **Theme Selector**: System/light/dark theme switching
- **Card Layouts**: Consistent content presentation
- **Timeline Component**: Professional experience visualization

### 🎨 Design System
- **DaisyUI Components**: Consistent, accessible UI components
- **Responsive Design**: Mobile-first approach with Tailwind
- **Theme Support**: Multiple color themes with CSS custom properties
- **Typography**: Readable fonts with proper scaling

## 🔧 Development Workflow

### Type Safety
- Strict TypeScript configuration with null checks
- Path aliases for clean imports (`@components/*`, `@layouts/*`)
- Zod schemas for content validation

### Code Quality
- TypeScript strict mode for better code quality
- Claude Code AI-assisted development (`.claude/` configuration)
- Production builds should be checked with `pnpm build`
- Primary static routes are smoke-tested in CI after `pnpm preview`
- Playwright visual regression tests (`pnpm test:vrt`) guard the primary routes; baselines are generated only in CI by the `VRT Update Baselines` workflow
- Lighthouse CI runs as an advisory check on dependency PRs

### Dependency Management
- **Renovate** is the dependency update source of truth; Dependabot is intentionally not configured.
- Dependency PRs target `develop`.
- All updates auto-merge once the required dependency gate passes; the gate is the review.
- Major npm updates need dependency dashboard approval to create the PR, then auto-merge once the gate passes.
- Playwright packages are grouped and auto-merge when the gate passes; if VRT fails, baselines are regenerated via the `VRT Update Baselines` workflow first.
- `minimumReleaseAge` delays automerge (7 days for npm patch/minor, 3 days for GitHub Actions); security fixes bypass the schedule via vulnerability alerts.
- The dependency gate installs with `pnpm install --frozen-lockfile`, runs `pnpm build`, starts `pnpm preview`, and smoke-checks `/`, `/cv/`, `/projects/`, `/hobbies/`, and `/pr/`, plus a Playwright visual regression job and an advisory Lighthouse CI job.

## 🌐 Deployment

Optimized for **Cloudflare Pages** with:
- Automatic builds from Git; `main` is the production deployment branch
- `develop` is the integration branch for dependency and content updates
- Weekly automated `develop` → `main` promotion via the `Promote to Main` workflow (Mondays 15:00 JST, merged with a merge commit after required checks pass)
- Post-deploy `Production Smoke Check` targets the **pages.dev project domain** to verify the live routes after every push to `main`; recovery is Cloudflare Pages Instant Rollback
- Global CDN distribution
- Static output generated by Astro
- Node.js version pinned by `.node-version`

### Build Process
```bash
pnpm build    # Generates static site in ./dist/
```

### Development Standards
- Follow existing TypeScript and component patterns
- Use DaisyUI classes for styling consistency
- Maintain responsive design principles
- Add proper TypeScript types for new features
- Keep internal links trailing-slash-safe because `trailingSlash: 'always'` is enabled
- Do not reintroduce `@astrojs/tailwind` or `tailwind.config.cjs`; Tailwind CSS 4 and DaisyUI 5 are configured from the CSS entrypoint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This project is based on the [Astrofy](https://github.com/manuelernestog/astrofy) template, which is also licensed under the MIT License. All credits to the original template go to [Manuel Ernesto Garcia](https://github.com/manuelernestog).

---

**Built with ❤️ by [necofuryai](https://github.com/necofuryai)** - A software engineer based in Tokyo, Japan 🗾
