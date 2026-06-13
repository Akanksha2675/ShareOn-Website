# ShareOn — Landing Website

Marketing landing page for [ShareOn](https://shareon-demo.bolt.host), an AI Personal Branding Agent that transforms documents, expertise and ideas into videos, posts, and multi-platform content.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server and bundler
- **Tailwind CSS** — utility-first styling
- **Supabase** — for any waitlist / auth integrations

## Project Structure

```
shareon-website-main/
├── src/
│   ├── components/     # Page sections and UI components
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│   ├── index.css       # Global styles
│   └── vite-env.d.ts   # Vite type declarations
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── package.json
└── vite.config.ts
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is deployed via **Bolt** at [shareon-demo.bolt.host](https://shareon-demo.bolt.host).

To deploy your own build, run `npm run build` and upload the `dist/` folder to your host of choice (Vercel, Netlify, etc.).

## Contributing

1. Create a branch: `git checkout -b feat/your-change`
2. Make your changes in `src/components/`
3. Test locally with `npm run dev`
4. Open a pull request
