# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (Turbopack, the Next 16 default — not an explicit `--turbopack` flag in this repo) at localhost:3000
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config: `eslint-config-next` core-web-vitals + typescript)
- `npx tsc --noEmit` — type-check (no dedicated npm script for this)
- No test runner is configured in this repo.

## Architecture

### Stack

Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4. Path alias `@/*` → `src/*`.

### State

Redux Toolkit store (`src/store/index.ts`) with three slices — `ui` (language), `progress` (per-topic answer counts), `history` (quiz session log) — persisted via `redux-persist` to `localStorage` under key `prep-root` (whitelist: `ui`, `progress`, `history`). The storage backend is swapped for a no-op implementation when `window` is undefined (SSR), otherwise `redux-persist` crashes on the server.

### Hydration-safety pattern (read before touching anything theme/language/progress-related)

The app is SSR'd but language/theme/progress are only known client-side (persisted in `localStorage`), so several components have to render something that matches on both the server and the client's *first* hydration pass, then switch to the real value right after:

- `useIsClient()` (`src/hooks/useIsClient.ts`) returns `false` until the client has mounted, `true` after — implemented via `useSyncExternalStore`, not `useEffect` + `setState` (that pattern trips the `react-hooks/set-state-in-effect` lint rule and, if not careful, still produces a real mismatch since `redux-persist` can finish rehydrating before the first hydration render in this app).
- `useLanguage()` returns `"en"` until `isClient` is true, then the real persisted value — this default must exactly match `uiSlice`'s initial state.
- Components that read `state.progress.topics` directly (e.g. `TopicsList`, the home page) need the same treatment: substitute `{}` for the real progress object until `isClient`, otherwise the SSR'd zero-progress markup won't match the client's rehydrated numbers.
- Exception: the dark/light theme toggle in `Header.tsx` does **not** use `isClient` gating. `next-themes` sets the `.dark` class on `<html>` synchronously before hydration (hence `suppressHydrationWarning` on `<html>` in `layout.tsx`), so the icon is rendered as two elements toggled purely via a Tailwind `dark:` variant — correct on the very first paint, no JS state involved. Prefer this CSS-only pattern over `resolvedTheme`-based conditional rendering wherever it's an option: an `isClient` gate around a whole element additionally causes a visible pop-in right after mount, on top of the hydration-safety cost.

### Question data

`QUESTIONS_DB` (`src/data/index.ts`) is a `Record<string, QuestionBlock>` assembled from one file per block under `src/data/questions/`. Never index `QUESTIONS_DB[id]` or `block.topics[id]` directly with a route param — plain-object indexing resolves inherited `Object.prototype` properties (a block/topic id of `"constructor"` or `"toString"`) to a truthy value instead of `undefined`, silently bypassing `notFound()` checks and crashing instead of 404ing. Always go through `getBlockData()` / `getTopicData()` (`src/lib/`), which guard with `Object.hasOwn` via `hasOwnKey()`.

### Routes

- `/` — home, block list with aggregate progress
- `/[block]` — topics within a block
- `/[block]/quiz`, `/[block]/[topic]/quiz` — quiz flow (all topics in a block / a single topic)
- `/dashboard` — aggregate stats + session history

### Quiz flow

`useQuiz` (`src/hooks/useQuiz.ts`) owns a single quiz session's state (question order shuffled via `src/lib/shuffle.ts`, current index, answers). On finishing, it dispatches `updateTopicProgress` and `addSession` — guarded against double-dispatch from a fast double-click on "Finish" via an `isFinished` check.

### i18n

`src/lib/i18n.ts` is a flat `{ ru, en }` UI-copy dictionary consumed through `useTranslations()`. Question content has its own separate per-question `en`/`ru` fields (`QuestionContent`); some components (e.g. topic titles in `TopicsList`) currently render `.en` unconditionally regardless of the selected UI language — that's pre-existing, not a regression to chase down reflexively.

### Layout width

Every top-level page uses `<main className="w-full max-w-4xl mx-auto px-4 py-12">`. The `w-full` is required, not decorative: `<main>` is a flex item of `<body class="flex flex-col">` (`layout.tsx`), and `mx-auto` there sets cross-axis auto margins, which per the flexbox spec disable `align-items: stretch`. Without `w-full`, `<main>` shrinks to fit its content instead of filling to `max-width`, so its rendered width silently varies with page content instead of staying constant.
