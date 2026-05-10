# Flowdoma — flowdoma.com

> Automate. Connect. Grow.

A modern Next.js 14 website for Flowdoma — AI tools, automation templates, and digital products for small business owners, freelancers, and content creators.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Syne (display) + DM Sans (body) + JetBrains Mono
- **Deployment:** Vercel (via GitHub auto-deploy)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, features, product previews, CTA |
| `/products` | Full product catalogue + services |
| `/about` | Brand story, mission, values, timeline |
| `/contact` | Contact form, booking options, FAQ |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Getting Started (Local Dev)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel via GitHub

### One-time setup:

1. Push this folder to a new GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Add your custom domain `flowdoma.com` in **Project Settings → Domains**

### Auto-deploy:
Every push to the `main` branch auto-deploys to Vercel. No manual steps needed.

## Customization Checklist

- [ ] Update social media links in `components/Footer.tsx`
- [ ] Add real Gumroad product links in `app/products/page.tsx`
- [ ] Update email address (`hello@flowdoma.com`) across all files
- [ ] Add Google Analytics or Plausible tracking in `app/layout.tsx`
- [ ] Connect contact form to Formspree or similar
- [ ] Add real product images/thumbnails to `/public/`
- [ ] Update newsletter form to connect to Beehiiv

## Environment Variables

No environment variables required for the base setup. Add as needed:

```env
# .env.local (not committed to git)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
FORMSPREE_ENDPOINT=your-formspree-endpoint
```
