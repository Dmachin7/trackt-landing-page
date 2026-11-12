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

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
