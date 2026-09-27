# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the marketing/corporate website frontend for Polgün (a water slide / water park equipment manufacturer). It is a Vite + React 19 SPA, written in JavaScript (JSX, no TypeScript), styled with Tailwind CSS v4. Content (news, fairs, bulletins, blog posts, jobs, projects, hero slides, partnership/career applications) is fetched at runtime from a separate backend CMS/API — this repo contains no backend code.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
npm run lint      # run ESLint over the project
```

There is no test suite configured in this repository.

## Backend API integration

The site is a pure frontend that talks to a backend CMS over `/api/*`. In dev, `vite.config.js` proxies `/api` and `/uploads` to `VITE_API_URL` (falls back to `http://localhost:3000`). In production the app is expected to be served from the same origin as the API, or `VITE_API_URL` must be set.

Pages that pull live content follow the same shape:
- Fetch on mount from `${API_URL}/api/<resource>/visible?t=${Date.now()}` with `cache: 'no-store'`, guard on `res.ok` and a JSON content-type check before parsing.
- Re-fetch on window `focus` so editors see CMS changes without a manual reload.
- Sort client-side by `order_index`/`order`.
- Map the raw API item into a view model (`mapApi*` helper) that resolves localized fields via a `translations` array on the item (see "Localization" below) and normalizes image paths through a `getImageUrl`/`getImagePath` helper that turns relative backend paths into absolute URLs.

Known inconsistency to be aware of when touching these pages: some pages read `API_URL` from `import.meta.env.VITE_API_URL` (HomePage, NewsPage, ProjectsPage), others hardcode `const API_URL = ''` and rely on the dev proxy / same-origin (ContactPage, CareerPage), and KnowledgeCenterPage calls `/api/...` directly with no `API_URL` prefix at all. When adding a new CMS-backed page, match the `VITE_API_URL`-based pattern (HomePage/NewsPage/ProjectsPage) rather than the hardcoded-empty-string one.

`src/constants/blogData.js` centralizes the mapping logic for Knowledge Center blog posts (`mapApiBlog`, `getLocalizedBlogs`, `getLocalizedText`, `parseJsonField`) — reuse these helpers rather than re-implementing localized-field/JSON-field parsing on other CMS resources that share the same shape (translations array, JSON-encoded sections/faqs/lists).

## Routing & layout

`src/App.jsx` owns the router (`react-router-dom`, data-less `<Routes>`/`<Route>` style, not a router config object). Key structure:
- A `MainLayout` route element renders `Navbar` + `Footer` around an `<Outlet>`, and passes `{ setActivePage, colorPalette }` down via route context (`useOutletContext`) rather than props drilling.
- `pageToPathMapping` maps logical page keys (used by `Navbar`/`Footer` for active-state highlighting) to actual URL paths — when adding a route, add both the `<Route>` entry and a `pageToPathMapping` entry.
- Legacy/alternate paths redirect via `<Navigate replace>` (e.g. `/rd`, `/arge` → `/r-and-d`; `/bilgi-merkezi` → `/knowledge-center`), including a slug-preserving redirect component (`KnowledgeCenterSlugRedirect`) for old detail-page URLs.
- A catch-all `*` route renders `NotFoundPage`.
- `ScrollToTop` is a router-aware effect component, not a scroll restoration library.

## Theming

There are two overlapping color systems — don't confuse them:
1. **CSS custom properties** (`--th-*`) defined in `src/index.css` under `:root, [data-theme="A"]` — these are the ones actually used throughout components/pages (`var(--th-primary)`, `var(--th-bg)`, `var(--th-text)`, etc.) plus a few fixed brand colors (`--th-polgun-blue`, `--th-polgun-antrasit`).
2. **`COLOR_PALETTES`** in `src/constants/colorPalettes.js` — numbered palette objects (`primary`/`secondary`/`accent`/`light`). `App.jsx` picks a palette per page via `PAGE_COLOR_PALETTES` (currently every page is hardcoded to palette `1`) and overrides a subset of the `--th-*` variables (`--th-primary`, `--th-primary-darker`, `--th-bg`) inline on the root div via `themeVars`. `App.jsx` also has its own hex color math helpers (`hexToRgb`, `rgbToHex`, `mixHex`, `shade`) used only to derive `--th-primary-darker` from the palette primary.

Tailwind v4 is configured via the `@tailwindcss/vite` plugin and `@import "tailwindcss"` + `@theme` block in `index.css` (no `tailwind.config.js`); a handful of Tailwind theme colors (`--color-teal`, `--color-navy`, etc.) are defined there but are largely unused in favor of the `--th-*` variables.

## Localization (i18n)

`src/i18n.js` configures `i18next` + `react-i18next` + `i18next-browser-languagedetector` with static resource bundles from `src/locales/<lang>/translation.json` for `en, tr, es, ru, ar, fr, zh`. It also syncs `<html lang>`/`<html dir>` on language change (Arabic gets `dir="rtl"`). `tr` is the effective fallback/source-of-truth language throughout the app's business logic (CMS localized-field resolution falls back to `tr` before `en`), even though i18next's own `fallbackLng` is `en`.

Two distinct localization mechanisms exist in the codebase:
- **Static UI strings**: via `useTranslation()` / `t('namespace.key', { defaultValue: '...' })` — translations live in `src/locales/*/translation.json`. Always pass a sensible `defaultValue`.
- **Dynamic CMS content**: resolved manually against a `translations` array on the API item (see `findLatestTranslation` pattern duplicated in `NewsPage.jsx` and `blogData.js`, and `getLocalizedText`/`mapApiBlog` in `blogData.js`), not via i18next. When adding new CMS-backed content, follow the existing `findLatestTranslation`/`mapApi*` pattern rather than trying to route it through i18next.

## Build tooling notes

- React Compiler (`babel-plugin-react-compiler`) is enabled via the Babel config in `vite.config.js` — avoid patterns that defeat its memoization assumptions (e.g. don't manually add unnecessary `useMemo`/`useCallback`, the compiler handles it).
- ESLint (`eslint.config.js`, flat config) enforces `react-hooks` rules and `no-unused-vars` (with an exception for names matching `^[A-Z_]`, i.e. constants).
