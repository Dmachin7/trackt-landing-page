// Server-side proxy to the Trackt HQ booking API.
// Keeps BOOKING_API_SECRET on the server — the browser never sees it.
// Mirrors the existing contact.ts pattern.
export const prerender = false;

import type { APIRoute } from "astro";

const HQ_BASE = import.meta.env.BOOKING_API_URL ?? "https://hq.trackt.tech";

export const GET: APIRoute = async () => {
  const secret = import.meta.env.BOOKING_API_SECRET;
  if (!secret) {
    console.error("BOOKING_API_SECRET is not set");
    return json({ error: "Booking is not configured. Please try again later." }, 500);
  }

  try {
    const hqRes = await fetch(`${HQ_BASE}/api/bookings/settings`, {
      headers: { Authorization: `Bearer ${secret}` },
    });
    const data = await hqRes.json().catch(() => ({}));
    return json(data, hqRes.ok ? 200 : 502);
  } catch (err) {
    console.error("booking-settings proxy error:", err);
    return json({ error: "Something went wrong. Please try again later." }, 502);
  }
};

function json(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
