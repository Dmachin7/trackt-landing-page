// Server-side proxy to the Trackt HQ availability API.
// Keeps BOOKING_API_SECRET on the server — the browser never sees it.
export const prerender = false;

import type { APIRoute } from "astro";

const HQ_BASE = import.meta.env.BOOKING_API_URL ?? "https://hq.trackt.tech";

export const GET: APIRoute = async ({ url }) => {
  const date = url.searchParams.get("date") ?? "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return json({ error: "date must be YYYY-MM-DD" }, 400);
  }

  const secret = import.meta.env.BOOKING_API_SECRET;
  if (!secret) {
    console.error("BOOKING_API_SECRET is not set");
    return json({ error: "Booking is not configured. Please try again later." }, 500);
  }

  try {
    const hqRes = await fetch(
      `${HQ_BASE}/api/bookings/availability?date=${encodeURIComponent(date)}`,
      { headers: { Authorization: `Bearer ${secret}` } }
    );
    const data = await hqRes.json().catch(() => ({}));
    return json(data, hqRes.ok ? 200 : 502);
  } catch (err) {
    console.error("booking-availability proxy error:", err);
    return json({ error: "Something went wrong. Please try again later." }, 502);
  }
};

function json(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
