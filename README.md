# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in the values. `.env` is gitignored.

| Variable | Exposed to browser? | Purpose |
| :------- | :------------------ | :------ |
| `BOOKING_API_URL` | No | Base URL of the Trackt HQ app (default `https://hq.trackt.tech`). |
| `BOOKING_API_SECRET` | **No** | Shared secret for the HQ booking API. Must match HQ's `BOOKING_API_SECRET`. Held server-side in the `/api/booking-*` proxy routes — the browser never sees it. |
| `PUBLIC_OWNER_EMAIL` | Yes | Email shown on `/booking` as the "email me directly" fallback if a booking fails. |
| `WEBSITE_FORM_SECRET` | No | Shared secret for the HQ website-form (contact) API. |
| `MAILERLITE_API_KEY` | No | MailerLite API key for newsletter signups. |
| `MAILERLITE_GROUP_ID` | No | MailerLite group for newsletter signups. |

> **Booking secret stays server-side.** The `/booking` page calls local Astro
> endpoints (`/api/booking-availability`, `/api/booking-create`,
> `/api/booking-settings`) which attach `BOOKING_API_SECRET` and forward to HQ.
> Set the same variables in the Vercel project settings for production.

## 💻 Website offer page (`/website`)

`src/pages/website.astro` is the $997 flat-rate custom website landing page
(trackt.tech/website). It has its own dark look and nav/footer, independent of
the site theme toggle, and deploys with the rest of this site — no separate
`vercel.json` or project needed.

### Stripe ($300 deposit)

All three deposit buttons (nav "Get Started", hero "Lock In Your Spot", pricing
"Pay $300 Deposit") read one constant at the top of the page:

```js
const STRIPE_DEPOSIT_LINK = "YOUR_STRIPE_PAYMENT_LINK";
```

Replace it with a live Stripe Payment Link (`https://buy.stripe.com/...`). A
Payment Link is a public URL, not a secret, so it lives in code rather than env.

### Images

Save images to `public/images/website/`, then swap each labelled placeholder
`<div class="placeholder ...">` for an `<img>` (or Astro `<Image>`). Each slot
has an `IMAGE:` comment above it.

| Slot | File | Size |
| :--- | :--- | :--- |
| Hero browser mockup — Bird Eye Promotions homepage | `birdeye-hero.jpg` | 1600 × 1000 (16:10) |
| Portfolio card — Bird Eye Promotions | `birdeye-card.jpg` | 1200 × 800 (3:2) |
| Portfolio card — KM Executive (optional; styled placeholder works as-is) | `km-executive-card.jpg` | 1200 × 800 (3:2) |

Export as JPG (or WebP) under ~300 KB each.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
