"use server";

export type ContactState = { ok?: boolean; error?: string };

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email) {
    return { error: "Please enter your name and email." };
  }

  // Wire to Follow Up Boss / CRM webhook when keys are available.
  void phone;
  void message;

  return { ok: true };
}
