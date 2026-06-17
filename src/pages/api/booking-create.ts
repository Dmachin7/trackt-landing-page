// Server-side proxy to the Trackt HQ booking-create API.
// Keeps BOOKING_API_SECRET on the server — the browser never sees it.
// Passes through HQ's status codes so the client can distinguish a taken slot
// (409) from validation (400) and server errors (5xx).
export const prerender = false;

import type { APIRoute } from "astro";

const HQ_BASE = import.meta.env.BOOKING_API_URL ?? "https://hq.trackt.tech";

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const secret = import.meta.env.BOOKING_API_SECRET;
  if (!secret) {
    console.error("BOOKING_API_SECRET is not set");
    return json({ error: "Booking is not configured. Please try again later." }, 500);
  }

  try {
    const hqRes = await fetch(`${HQ_BASE}/api/bookings/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify(body),
    });
    const data = await hqRes.json().catch(() => ({}));
    return json(data, hqRes.status);
  } catch (err) {
    console.error("booking-create proxy error:", err);
    return json({ error: "Something went wrong. Please try again later." }, 502);
  }
};

function json(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
