# Project 1

The point of this project is to reimplement a simplified Gutenberg block (featured post block) using Express + React + PostgreSQL, without WordPress.

## Featured Story Block

- Input: Select a post to feature
- Output: Render a card with featured image, title, excerpt, author name
- Admin view: Form or dropdown to pick a story
- Frontend: Server-rendered fallback + JS enhancement

## Tech Stack
- Backend: Node.js + Express
- DB: PostgreSQL
- Frontend: React with Vite
- Templating: EJS or Pug for fallback HTML
- Optional styling: Tailwind or plain CSS

## Milestones

### Milestone 1: Backend API + Database

- Set up Express app and REST endpoint: `GET /api/posts`
- Create a posts table: `id`, `title`, `slug`, `excerpt`, `author`, `image_url`
- Add fake data
- Write query builder functions for fetching posts

### Milestone 2: React Admin Interface

- Use React to display a list of posts with a "select button"
- Maintain selected post ID in local state
- Render a preview of the selected post (with image/title/excerpt)
- Post selected post ID to `/api/featured`

### Milestone 3: Frontend Render
- Create a route `/featured` that server-renders the selected post using EJS or Pug
- Add a `<script>` to hydrate the React component on load for interactivity
- Add client-side controls (e.g., change post inline via dropdown)

### Milestone 4: Server rendering fallback
- Simulate non-JS environment: Does the block still render?

### Mileston 5: Polish and Reflect
- What parts did WP make easier (e.g., media uploads, permissions, block registration)?
- What parts did WP make harder (e.g., custom REST routes, async client interactivity)?
- Optional: deploy on Render, fly.io, or Vercel
