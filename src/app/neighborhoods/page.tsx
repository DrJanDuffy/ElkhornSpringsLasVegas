import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata, defaultOpenGraph, siteMetadataBase } from "@/lib/metadata";
import { neighborhoods } from "@/lib/neighborhoods";
import { agent, siteIdentity } from "@/lib/site-contact";

const path = "/neighborhoods";

export const metadata: Metadata = createMetadata({
  title: `Elkhorn Springs neighborhoods & villages (${siteIdentity.zip})`,
  description: `Compare The Preserve, Elkhorn Grove, Northern Lights, and every Elkhorn Springs village with ${agent.name}. Hyperlocal guides—not generic portal blurbs.`,
  alternates: { canonical: path },
  openGraph: {
    ...defaultOpenGraph,
    title: `Neighborhoods | ${siteIdentity.siteName}`,
    url: new URL(path, siteMetadataBase),
  },
});

export default function NeighborhoodsHubPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Elkhorn Springs neighborhoods &amp; villages
        </h1>
        <p className="text-muted-foreground">
          Start with the village that matches your lifestyle—gated vs builder-new vs interior quiet blocks—then
          dive into listing alerts tied to that micro-market.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {neighborhoods.map((n) => (
          <Card key={n.slug} className="shadow-sm transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{n.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{n.description}</p>
              <Button asChild>
                <Link href={`/neighborhoods/${n.slug}`}>Open village guide</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
