import Link from "next/link";
import { MapPin } from "lucide-react";
import {
  getMapEmbedSrc,
  getMapOpenInNewTabUrl,
  openHouseFaqs,
  openHouseHeadline,
  openHouseScheduleLine,
  openHouseSubcopy,
} from "@/config/open-house";
import { TrackedTelLink } from "@/components/integrations/TrackedTelLink";
import { Button } from "@/components/ui/button";
import { emails, phones, siteIdentity } from "@/lib/site-contact";

const mapsQuery = encodeURIComponent(`Elkhorn Springs Las Vegas NV ${siteIdentity.zip}`);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export function OpenHouseMapSection() {
  const embedSrc = getMapEmbedSrc();

  return (
    <section
      id="open-houses"
      className="cv-below-fold border-b border-border bg-muted/15 py-14 dark:bg-muted/10 sm:py-16"
      aria-labelledby="open-houses-heading"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <header className="max-w-3xl space-y-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            This weekend · {siteIdentity.zip}
          </p>
          <h2 id="open-houses-heading" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {openHouseHeadline}
          </h2>
          <p className="text-base font-medium text-foreground">{openHouseScheduleLine}</p>
          <p className="leading-relaxed text-muted-foreground">{openHouseSubcopy}</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="min-h-11 w-full sm:w-auto" asChild>
              <TrackedTelLink href={`tel:${phones.primaryCtaTel}`}>Call {phones.primaryCta}</TrackedTelLink>
            </Button>
            <Button size="lg" variant="secondary" className="min-h-11 w-full sm:w-auto" asChild>
              <Link href="/contact">Request a tour time</Link>
            </Button>
            <Button size="lg" variant="outline" className="min-h-11 w-full sm:w-auto" asChild>
              <a href={mapsHref} rel="noopener noreferrer">
                Directions (Google Maps)
              </a>
            </Button>
          </div>
        </header>

        <div className="space-y-3">
          <div className="relative overflow-hidden rounded-2xl p-[1px] shadow-md shadow-primary/5">
            <div className="cta-glow absolute inset-0 rounded-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[calc(1rem-1px)] border border-border/80 bg-card">
              <iframe
                title={`Open house map — ${siteIdentity.primaryArea}, Las Vegas ${siteIdentity.zip}`}
                src={embedSrc}
                className="h-[min(70vh,520px)] w-full border-0 sm:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            <a
              href={getMapOpenInNewTabUrl()}
              className="font-medium text-primary underline-offset-4 hover:underline"
              rel="noopener noreferrer"
            >
              Open this map in Google Maps (full screen)
            </a>
          </p>
        </div>

        <div className="space-y-6 rounded-2xl border border-border bg-card/80 p-6 sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">Open house quick answers</h3>
          <dl className="space-y-5">
            {openHouseFaqs.map((f) => (
              <div key={f.question} className="space-y-1.5">
                <dt className="font-medium text-foreground">{f.question}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-muted-foreground">
            Email:{" "}
            <a className="font-medium text-primary underline-offset-4 hover:underline" href={`mailto:${emails.primary}`}>
              {emails.primary}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
