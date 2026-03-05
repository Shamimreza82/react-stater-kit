# React Vite Starter 2026

Production-focused React starter with routing, auth baseline, dashboard shell, and scalable project structure.

## Current Status

This is an **initial production-ready baseline**.

Included now:
- React + TypeScript + Vite
- Public + protected routing
- Login/Signup pages
- Dashboard layout with nested routes
- Central auth token utility
- Central Axios client with interceptors
- Auth service layer (`login` / `signup`)
- Unauthorized event-based redirect flow
- Environment validation with Zod
- Type-aware ESLint configuration
- Global error boundary
- 404 page
- Scalable folder scaffold for future projects

Still needed for full production:
- Real backend auth endpoints
- Refresh token flow
- Feature tests (unit/integration/e2e)
- CI/CD pipeline
- Monitoring/alerting

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- React Router 7
- Tailwind CSS 4
- Axios
- Zod

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run check
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` and set values:

```env
VITE_APP_NAME=Nova Starter
VITE_SITE_URL=http://localhost:5173
VITE_API_BASE_URL=http://localhost:4000/api
VITE_USE_AUTH_MOCK=true
```

Env is validated at runtime in:
- `src/config/env.ts`

## SEO Baseline

Included:
- Route-level SEO metadata (title, description, canonical, Open Graph, Twitter)
- `noindex` on auth/private pages (`/login`, `/signup`, `/dashboard`, `/admin`)
- `public/robots.txt`
- `public/sitemap.xml`

Before production:
1. Set `VITE_SITE_URL` to your real domain in `.env`.
2. Replace `https://your-domain.com` in `public/robots.txt`.
3. Replace `https://your-domain.com` in `public/sitemap.xml`.
4. Submit `https://your-domain.com/sitemap.xml` in Google Search Console.

Quick check:
1. Open page source and confirm `title`, `description`, `canonical`, `og:*`, `twitter:*` are present.
2. Confirm auth/private routes return `noindex, nofollow`.
3. Confirm `robots.txt` and `sitemap.xml` are reachable in production.

## Routing

Public routes:
- `/`
- `/about`
- `/contact`
- `/login`
- `/signup`

Protected routes:
- `/dashboard`
- `/dashboard/users`
- `/dashboard/settings`

Main files:
- `src/app/router/index.tsx`
- `src/app/router/guards/protected-route.tsx`
- `src/app/router/routes/dashboard.routes.tsx`
- `src/app/router/routes/auth.routes.tsx`

## Auth Baseline

Token utility:
- `src/services/auth-token.ts`

Auth service:
- `src/services/auth.service.ts`

Flow:
1. Login/Signup calls `authService`.
2. On success, token is saved via `auth-token`.
3. `ProtectedRoute` checks token.
4. Unauthorized users are redirected to `/login`.
5. Logout clears token and redirects to `/login`.

## API Baseline

Central HTTP client:
- `src/services/http.ts`

Included:
- `baseURL` from env
- JSON default headers
- Request interceptor adds Bearer token
- Response interceptor handles `401` by clearing auth and emitting unauthorized event

Unauthorized redirect listener:
- `src/hooks/use-unauthorized-redirect.ts`
- `src/services/auth-events.ts`

## Error Handling

Global error boundary:
- `src/core/providers/AppErrorBoundary.tsx`

App is wrapped in boundary in:
- `src/main.tsx`

## Folder Structure

```txt
src/
  app/
    layout/
    pages/
    router/
  core/
    providers/
    router/
  features/
  shared/
    ui/
    layout/
    lib/
  services/
  config/
  constants/
  hooks/
  types/
  styles/
  components/
  lib/
```

## Reuse As Starter

1. Copy this project.
2. Rename app/package metadata.
3. Replace demo auth logic with real API calls.
4. Keep structure and add new work in `features`.
5. Add tests + CI before shipping.

## User Guide

Detailed operational guide:
- `docs/USER_GUIDE.md`
