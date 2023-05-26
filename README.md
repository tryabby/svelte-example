---
name: A/B Testing with A/BBY
slug: ab-testing-abby
description: A/BBY is a service for developer focused Feature Flags & A/B Testing. In this template you'll be able to use feature flags and A/B tests at the edge.
framework: SvelteKit
useCase: A/B Testing
css: Tailwind
deployUrl: 
demoUrl: https://abby-svelte-example.vercel.app/
relatedTemplates:
  - ab-testing-simple
---

# A/B Testing with ConfigCat

[A/BBY](https://tryabby.dev) is a service for developer focused Feature Flags & A/B Testing. In this Demo you'll be able to use feature flags and A/B tests at the edge.

By A/B testing directly on the server-side, you'll reduce layout shift from client-loaded experiments and improving your site's performance with smaller JavaScript bundles.

## Demo
https://abby-svelte-example.vercel.app/

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
