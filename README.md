# Modern PWA Template

A modern Progressive Web App template built with Preact, GraphQL, and Vite. This template includes real-time subscriptions, offline support, and a modern development setup.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- 🔄 **PWA Support** - Full Progressive Web App capabilities
- ⚛️ **Preact** - Lightweight React alternative
- 📱 **Responsive Layout** - Mobile-first design with Tailwind CSS
- 🚀 **GraphQL** - Full GraphQL setup with queries, mutations, and subscriptions
- 🔄 **State Management** - Zustand for simple and effective state management
- 🎯 **Routing** - Client-side routing with Wouter
- 💅 **Styling** - Tailwind CSS for utility-first styling
- 🔌 **Offline Support** - Service worker and offline functionality

## Quick Start

1. Clone this template:
```bash
# Create a new project using this template
npx degit productiveme/pwa-template my-pwa-app

# Navigate to project directory
cd my-pwa-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the setup wizard:
```bash
npm run setup
```
The setup wizard will help you customize your PWA by configuring:
- Project name
- Project description
- Author name
- Theme colors
- PWA settings

4. Start development server:
```bash
npm run dev
```

## Project Structure

```
├── client/
│   ├── domain/         # Business logic and state management
│   ├── infrastructure/ # External services integration (GraphQL, etc.)
│   └── presentation/   # UI components and pages
├── server/            # GraphQL server implementation
├── public/            # Static assets
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run setup` - Run the PWA setup wizard

## GraphQL Integration

The template includes a full GraphQL setup with:
- Queries for data fetching
- Mutations for data modifications
- Real-time subscriptions
- Built-in GraphQL dev tools

Example query:
```graphql
query GetPosts {
  posts {
    id
    title
  }
}
```

## PWA Features

This template includes:
- Service Worker for offline support
- Manifest for installability
- Workbox for caching strategies
- Push notification support

## Customization

1. Update `client/config.js` with your API endpoints
2. Modify `vite.config.js` for build configuration
3. Update PWA settings in `vite-plugin-pwa` configuration
4. Customize Tailwind theme in `tailwind.config.js`

## Best Practices

- Keep components small and focused
- Use GraphQL fragments for reusable queries
- Implement proper error boundaries
- Follow the container/presenter pattern
- Use TypeScript for better type safety

## Environment Variables

Create a `.env` file in the root:

```env
VITE_PORT=3001
VITE_PORT_GQL=3002
```

## License

MIT
