# Dev Gothi — Portfolio

Product design and front-end engineering portfolio. Next.js (App Router) · TypeScript · Tailwind CSS 4 · Motion.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also lints and type-checks)
npm start
```

## Routes

| Route | Content |
| --- | --- |
| `/` | Hero, selected work, process, about preview, contact |
| `/work/safespace` | SafeSpace case study |
| `/work/retail-vision` | Retail Vision Intelligence case study |
| `/work/invoice-validator` | Invoice Validator project page |
| `/about` · `/photography` · `/contact` | Supporting pages |

## Where things live

- `src/content/site.ts` — personal details and **every external link**. A `null` link is hidden everywhere (no dead `href="#"`).
- `src/content/projects.ts` — project data used by the homepage and case-study navigation.
- `src/assets/` — real images only: portrait, photographs, and product screens captured from the actual SafeSpace and Retail Vision codebases and the Invoice Validator demo recording.
- `public/media/` — the Invoice Validator demo video (no audio).

## Still to supply

- **LinkedIn URL** → `links.linkedin` in `src/content/site.ts`
- **Resume PDF** → put it in `public/` and set `links.resume` (e.g. `"/dev-gothi-resume.pdf"`). The Resume button appears in the header, mobile menu, About and Contact automatically.
- **Production domain** → set `NEXT_PUBLIC_SITE_URL` for canonical URLs, sitemap and Open Graph (on Vercel the production URL is detected automatically).
