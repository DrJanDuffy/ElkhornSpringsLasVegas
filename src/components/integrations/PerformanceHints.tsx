/**
 * Low-cost hints for third-party analytics (only when GTM or GA is configured).
 */
export function PerformanceHints() {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  const ga = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!gtm && !ga) return null;
  return (
    <>
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
    </>
  );
}
