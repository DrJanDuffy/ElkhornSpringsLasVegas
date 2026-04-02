import Script from "next/script";

const enabled = process.env.NEXT_PUBLIC_CALLACTION_ENABLED === "true";
const src = process.env.NEXT_PUBLIC_CALLACTION_SCRIPT_URL?.trim();

export function CallActionScript() {
  if (!enabled || !src) return null;
  return <Script src={src} strategy="lazyOnload" />;
}
