export const FORM_WEBHOOK_URL = "https://hook.eu2.make.com/tzgtzlvgl6s7lhk7r4s3dkk9sl9mt615";

type PayloadValue = string | boolean | null;
type Payload = Record<string, PayloadValue>;

function pickFirst(formData: FormData, names: string[]): string {
  for (const name of names) {
    const value = formData.get(name);
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

export function normalizeCommonFields(formData: FormData, extras: Payload = {}): Payload {
  return {
    source: "aktif-kampus-web",
    form_type: pickFirst(formData, ["formType", "tur", "variant"]),
    full_name: pickFirst(formData, ["full_name", "adSoyad"]),
    email: pickFirst(formData, ["email"]),
    phone: pickFirst(formData, ["phone", "telefon"]),
    subject: pickFirst(formData, ["subject", "konu", "alanUygunlugu"]),
    message: pickFirst(formData, ["message", "mesaj", "contribution", "katki", "nedenTemsilci", "aktifKampusAdimlari"]),
    address: pickFirst(formData, ["address", "adres"]),
    city: pickFirst(formData, ["city", "yasadigiIl"]),
    university: pickFirst(formData, ["university", "universite", "universiteBolum", "universiteTemsilcilik"]),
    department: pickFirst(formData, ["department", "bolumSinif"]),
    kvkk_approved: formData.get("kvkkAydinlatmaOnay") !== null,
    ...extras,
  };
}

export function extractFormFields(formData: FormData): Payload {
  const fields: Payload = {};
  for (const [key, value] of formData.entries()) {
    fields[key] = typeof value === "string" ? value : "";
  }
  return fields;
}

export async function postFormToWebhook(payload: Payload): Promise<void> {
  const response = await fetch(FORM_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook request failed: ${response.status}`);
  }
}
