# NecoFuryAI Personal Website

![Infrastructure](necofuryai-personal-website.png)

## Project Overview
The NecoFuryAI Personal Website is a portfolio showcasing skills, projects, and interests. It features a responsive design and is built with modern web technologies.

## Technologies Used
- **Astro**: Framework for building static websites.
- **TypeScript**: For type-safe development.
- **Tailwind CSS**: For styling and responsive design.
- **Cloudflare Pages**: For deployment and hosting.

## File Structure
```
.
├── public/               # Static assets (images, robots.txt, etc.)
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Website pages
│   ├── styles/           # Global styles
│   └── lib/              # Utility functions
├── memory-bank/          # Project documentation
├── astro.config.mjs      # Astro configuration
├── tailwind.config.cjs   # Tailwind CSS configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Key Components
- **Header**: Navigation bar for the website.
- **Footer**: Footer section with additional links.
- **SideBar**: Sidebar for navigation on specific pages.
- **Card**: Component for displaying content in a card layout.

## Pages
- **index.astro**: Home page.
- **hobbies.astro**: Page showcasing hobbies with embedded music playlists.
- **cv.astro**: Curriculum Vitae page.
- **projects.astro**: Projects portfolio.
- **pr.astro**: Personal PR page.

## Styling
Tailwind CSS is used for styling, ensuring a consistent and responsive design across devices.

## Deployment
The website is deployed on **Cloudflare Pages** for fast and reliable hosting.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
