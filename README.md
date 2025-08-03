# v0 Product Landing

A modern product landing page built with [Next.js](https://nextjs.org/) 15, React and TypeScript. It showcases a small catalogue of products with multilingual support and a favorites system powered by Redux. Users can switch between light and dark themes.

## Features
- **Next.js 15 & App Router** for a performant developer experience
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Internationalization** with dictionary-based translations for English and Turkish
- **Dark / Light theme toggle** via `next-themes`
- **Favorites management** using Redux Toolkit
- Responsive design out of the box

## Getting Started
Prerequisites: [Node.js](https://nodejs.org/) 18+ and [PNPM](https://pnpm.io/) installed globally.

```bash
pnpm install        # install dependencies
pnpm dev            # start the development server
```

Open <http://localhost:3000> with your browser to see the result.

### Additional scripts
```bash
pnpm build   # build the application for production
pnpm start   # run the built application
pnpm lint    # run ESLint
```

## Project Structure
- `app/` – application routes and layouts
- `components/` – shared UI components
- `modules/landing/` – landing page sections and logic
- `dictionaries/` – translation JSON files
- `lib/` – Redux store and slices

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Contributing
Contributions, issues and feature requests are welcome!

## License
This project is open-sourced under the MIT license.
