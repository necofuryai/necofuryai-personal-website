# System Patterns

## System Architecture
- The project is structured as a static website built with Astro.
- Components are modular and reusable, following a clear separation of concerns.

## Key Technical Decisions
- Use of Astro for its performance and simplicity in building static websites.
- Deployment on Cloudflare Pages for fast and reliable hosting.

## Design Patterns
- Component-based architecture for UI elements.
- Separation of content and layout to ensure maintainability and scalability.

## Component Relationships
- `BaseLayout.astro` serves as the primary layout for pages.
- Shared components like `Header`, `Footer`, and `SideBar` are used across multiple pages.
- Specialized components like `Card` and `HorizontalCard` are used for specific content presentation.
