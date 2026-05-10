# CLAUDE.md — Project Guidelines for LLM Assistance
Read this file completely before generating code, suggesting changes, or answering project-specific questions.

## Project Identity

- **What:** Vue Capacitor starter kit
- **Stack:** Vue 3 Composition API, TypeScript, Tailwind CSS v4, Pinia, Oxlint, Oxfmt
- **Package Manager:** Yarn 4 — enforced via `engines` and fnm. Never use npm or pnpm.
- **Node:** Version can be found in Package.json or by `fnm ls` (enforced via `engines` and fnm)
- **Directory layout:** Vue 3 `src/` directory — components, views, assets, etc. live under `src/`

## Commands

```bash
yarn dev                # Dev server (cleans .nuxt first)
yarn build              # Production build
yarn preview            # Preview production build locally
yarn test               # Run Vitest
yarn test:ui            # Vitest with browser UI
yarn test:coverage      # Vitest with v8 coverage
yarn lint               # oxlint
yarn lint:fix           # oxlint with auto-fix
yarn format             # oxfmt
yarn format:check       # oxfmt dry-run
yarn type-check         # vue-tsc --build
```

## Architecture

### State Management
- **Pinia** for global application state.
- **Composables** for shared reactive logic and reusable behavior.
- Do not mix these concerns: if it's global state, it's a store. If it's reusable logic, it's a composable.

### Co-located Files
Tests (`.test.ts`), styles, and Storybook stories (`.stories.ts`) live alongside their respective components/features — not in a separate top-level `tests/` directory. Demo data (`demo-data.json`) also lives in the component directory.

## Code Style & Rules

### TypeScript
- **Prefer TypeScript** for all new files. Use explicit types; avoid `any`.
- Use interfaces and generics for type safety. Static checks via `vue-tsc`.
- Interfaces / Types / Enums / Type parameters: `PascalCase`, no underscores.
- Variables / Functions: `camelCase`.
- Top-level exported constants: `UPPER_CASE` or `PascalCase` (per oxlint config).

### Vue Components
- Always use `<script setup>` with Composition API.
- Component file names: `PascalCase` (e.g., `BaseButton.vue`).
- Component usage in templates: always `PascalCase` (e.g., `<BaseButton />`).
- Props in templates: camelCase, no hyphenation (e.g., `<MyComponent customProp="value" />`).
- Never use `v-html` — security risk enforced by `nuxt-security`.

### Styling
- **Tailwind CSS v4** is the primary styling tool.
- **SCSS** is permitted only for complex animations and edge cases — not for general layout or utility styling.
- Do not introduce CSS-in-JS, styled-components, or other styling paradigms.

### Strictness (enforced by oxlint)
- Max function parameters: **3**.
- Max nesting depth: **5**.
- No nested ternaries — use early returns or `if/else`.
- Prefer template literals over string concatenation.
- Use `const` for variables that are not reassigned; prefer destructuring.
- Use `try/catch` for error handling. No `.catch()` chains unless unavoidable.
- No `FIX` comments — they trigger a lint error. Resolve issues, don't annotate them.

## Testing & Documentation
- Write unit tests with **Vitest** for all logic and components.

## Boundaries

### Do not modify or index
`.output/`, `dist/`, `coverage/`, `.yarn/`, `node_modules/`, `localcerts/`

### Do not propose
- Alternative frameworks, build tools, or package managers.
- Replacing Storyblok with another CMS.
- Replacing Redis or the SWR caching pattern.
- Removing or bypassing Husky hooks.
- New dependencies unless there is a clear, justified need that existing tools (`@vueuse/core`, Pinia, highlight.js, etc.) cannot cover.