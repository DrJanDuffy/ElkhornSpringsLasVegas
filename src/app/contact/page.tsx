import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { createMetadata, defaultOpenGraph, siteMetadataBase } from "@/lib/metadata";
import { agent, emails, formatNapLine, phones, siteIdentity } from "@/lib/site-contact";

const path = "/contact";

const cloudCmaUrl = process.env.NEXT_PUBLIC_CLOUDCMA_EMBED_URL?.trim();
const mapsQuery = encodeURIComponent(`Elkhorn Springs Las Vegas NV ${siteIdentity.zip}`);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const reviewUrl = process.env.NEXT_PUBLIC_GBP_REVIEW_URL?.trim();

export const metadata: Metadata = createMetadata({
  title: `Contact ${agent.name} | CMA & buyer consult`,
  description: `Call ${phones.primaryCta}, email ${emails.primary}, or request a CloudCMA report for Elkhorn Springs (${siteIdentity.zip}).`,
  alternates: { canonical: path },
  openGraph: {
    ...defaultOpenGraph,
    title: `Contact | ${siteIdentity.siteName}`,
    url: new URL(path, siteMetadataBase),
  },
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact &amp; CMA request</h1>
        <p className="text-muted-foreground">
          Reach {agent.name} for tours, listing prep, or pricing questions in {siteIdentity.primaryArea}. NAP:{" "}
          {formatNapLine()}.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="space-y-4" aria-label="Call, directions, reviews">
          <h2 className="text-xl font-semibold">Talk with the team</h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
              href={`tel:${phones.primaryCtaTel}`}
            >
              Call {phones.primaryCta}
            </a>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-muted"
              href={`mailto:${emails.primary}`}
            >
              Email {emails.primary}
            </a>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-muted"
              href={mapsHref}
              rel="noopener noreferrer"
            >
              Directions (Google Maps)
            </a>
            {reviewUrl ? (
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium hover:bg-muted"
                href={reviewUrl}
                rel="noopener noreferrer"
              >
                View Google reviews
              </a>
            ) : null}
          </div>
          <p className="text-sm text-muted-foreground">
            Professional line:{" "}
            <a className="text-primary underline-offset-4 hover:underline" href={`tel:${phones.professionalTel}`}>
              {phones.professional}
            </a>
          </p>
        </section>

        <section className="space-y-4" aria-label="Quick message">
          <h2 className="text-xl font-semibold">Send a message</h2>
          <ContactForm />
        </section>
      </div>

      <section className="space-y-4" aria-label="CloudCMA valuation embed">
        <h2 className="text-xl font-semibold">Request a CloudCMA report</h2>
        <p className="text-sm text-muted-foreground">
          Use the CloudCMA embed below for a structured comparative market analysis. If the embed is not
          configured, add <code className="rounded bg-muted px-1">NEXT_PUBLIC_CLOUDCMA_EMBED_URL</code> in your
          environment.
        </p>
        {cloudCmaUrl ? (
          <div className="overflow-hidden rounded-xl border shadow-sm">
            <iframe
              title="CloudCMA request form"
              src={cloudCmaUrl}
              className="min-h-[720px] w-full"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-xl border border-dashed bg-muted/40 p-8 text-center text-sm text-muted-foreground">
            CloudCMA embed URL not set.
          </div>
        )}
      </section>
    </div>
  );
}
