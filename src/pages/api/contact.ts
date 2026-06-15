export const prerender = false;

import type { APIRoute } from "astro";

const HQ_ENDPOINT = "https://hq.trackt.tech/api/integrations/website-form";

export const POST: APIRoute = async ({ request }) => {
  let contact_name: string;
  let email: string;
  let business_name: string | undefined;
  let service: string | undefined;
  let message: string | undefined;

  try {
    const body = await request.json();
    contact_name = body.contact_name?.toString().trim();
    email = body.email?.toString().trim();
    business_name = body.business_name?.toString().trim() || undefined;
    service = body.service?.toString().trim() || undefined;
    message = body.message?.toString().trim() || undefined;
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  if (!contact_name) return json({ error: "Name is required." }, 422);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return json({ error: "A valid email is required." }, 422);

  const secret = import.meta.env.WEBSITE_FORM_SECRET;
  if (!secret) {
    console.error("WEBSITE_FORM_SECRET is not set");
    return json({ error: "Form is not configured. Please try again later." }, 500);
  }

  // Encode the service selection into the message since HQ API has no service field
  const fullMessage = [
    service ? `Service: ${serviceLabel(service)}` : null,
    message || null,
  ]
    .filter(Boolean)
    .join("\n\n") || undefined;

  const hqRes = await fetch(HQ_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${secret}`,
    },
    body: JSON.stringify({ contact_name, email, business_name, message: fullMessage }),
  });

  if (hqRes.status === 201) {
    return json({ ok: true }, 200);
  }

  if (hqRes.status === 401) {
    console.error("Trackt HQ: 401 Unauthorized — check WEBSITE_FORM_SECRET");
    return json({ error: "Something went wrong. Please try again later." }, 500);
  }

  if (hqRes.status === 422) {
    const data = await hqRes.json().catch(() => ({}));
    const field = data?.error ?? "Validation failed. Please check your details.";
    return json({ error: field }, 422);
  }

  console.error("Trackt HQ: unexpected status", hqRes.status);
  return json({ error: "Something went wrong. Please try again later." }, 500);
};

function json(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function serviceLabel(value: string) {
  const map: Record<string, string> = {
    "tech-consulting": "Tech Consulting",
    "website-design": "Website Design & Development",
    "custom-software": "Custom Software & Integrations",
    "not-sure": "Not Sure Yet",
  };
  return map[value] ?? value;
}
