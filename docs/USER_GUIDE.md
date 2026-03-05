# User Guide

## Daily Workflow

1. Install dependencies:
```bash
npm install
```

2. Start dev server:
```bash
npm run dev
```

3. Type check:
```bash
npx tsc -b
```

4. Production build:
```bash
npm run build
```

## Route Testing Flow

1. Open `/login`
2. Click login
3. Verify redirect to `/dashboard`
4. Open `/dashboard/users` and `/dashboard/settings`
5. Click logout in dashboard
6. Verify redirect to `/login`

## Where to Add New Code

- New page: `src/app/pages`
- New feature module: `src/features/<feature-name>`
- Shared UI: `src/shared/ui`
- API service: `src/services`
- New guarded route: `src/app/router/index.tsx`

## Add a New Protected Page

1. Create feature page component.
2. Add route in `dashboard.routes.tsx` or protected route section.
3. Ensure route is under `<ProtectedRoute />`.

## Starter Reset Checklist (When Reusing This Repo)

1. Update app name in `package.json`.
2. Update brand text/logo.
3. Replace demo login/signup behavior with backend auth.
4. Add real API base URL in `.env`.
5. Remove sample dashboard stats and connect live data.
