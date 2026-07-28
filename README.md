# Autheo.dev frontend

This repository contains a Next.js (App Router) + TypeScript + Tailwind CSS starter for the Autheo developer platform frontend.

Getting started

1. Install dependencies

   npm install

2. Run dev server

   npm run dev

Notes

- Tailwind is configured in tailwind.config.js and the global stylesheet is at app/globals.css.
- Lint with `npm run lint` and typecheck with `npm run typecheck`.

Next steps I can help with

- Design system or component library (Radix + Tailwind, Chakra)
- Layouts for auth, dashboard, and docs
- Storybook and UI tests
- CI/CD and Vercel configuration


autheo-devhub/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.ts
│   │
│   ├── docs/
│   │   └── page.tsx
│   │
│   ├── playground/
│   │   └── page.tsx
│   │
│   ├── sdk/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── separator.tsx
│   │
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── DevHubNav.tsx
│   ├── FeatureGrid.tsx
│   ├── CodePreview.tsx
│   └── NetworkStats.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── ...
│
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── components.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
