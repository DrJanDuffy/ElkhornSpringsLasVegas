import Script from "next/script";

const REALSCOUT_WIDGET_SRC =
  "https://em.realscout.com/widgets/v1/realscout-web-components.umd.js";

export function RealScoutLoader() {
  return (
    <Script src={REALSCOUT_WIDGET_SRC} strategy="afterInteractive" type="module" />
  );
}
