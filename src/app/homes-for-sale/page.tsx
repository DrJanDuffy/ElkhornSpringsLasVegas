import type { Metadata } from "next";
import Link from "next/link";
import { MlsDisclaimer } from "@/components/compliance/MlsDisclaimer";
import { RealScoutOfficeListings } from "@/components/integrations/RealScoutOfficeListings";
import { createMetadata, defaultOpenGraph, siteMetadataBase } from "@/lib/metadata";
import { agent, siteIdentity } from "@/lib/site-contact";

const path = "/homes-for-sale";

export const metadata: Metadata = createMetadata({
  title: `Homes for sale in ${siteIdentity.primaryArea} (${siteIdentity.zip})`,
  description: `Browse active MLS listings in Elkhorn Springs and ${siteIdentity.zip} with ${agent.name}. Filter saved searches to this master plan before you tour.`,
  alternates: { canonical: path },
  openGraph: {
    ...defaultOpenGraph,
    title: `Homes for sale | ${siteIdentity.siteName}`,
    description: `MLS-powered search for Elkhorn Springs, Las Vegas ${siteIdentity.zip}.`,
    url: new URL(path, siteMetadataBase),
  },
});

export default function HomesForSalePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Homes for sale in Elkhorn Springs ({siteIdentity.zip})
        </h1>
        <p className="text-muted-foreground">
          Use the live MLS widget below. In your RealScout dashboard, save a search preset for{" "}
          <strong>89131</strong> and <strong>Elkhorn Springs</strong> so visitors land on the right inventory.
        </p>
      </header>
      <section className="max-w-3xl rounded-xl border bg-muted/30 p-6" aria-label="Narrow by village">
        <h2 className="text-lg font-semibold">Buying in a specific village?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pair your MLS search with a village guide—start with{" "}
          <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/neighborhoods/the-preserve">
            The Preserve
          </Link>
          ,{" "}
          <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/neighborhoods/elkhorn-grove">
            Elkhorn Grove
          </Link>
          , or the full{" "}
          <Link className="font-medium text-primary underline-offset-4 hover:underline" href="/neighborhoods">
            neighborhoods hub
          </Link>
          .
        </p>
      </section>
      <RealScoutOfficeListings />
      <MlsDisclaimer />
    </div>
  );
}
