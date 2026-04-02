import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { neighborhoods } from "@/lib/neighborhoods";
import { siteIdentity } from "@/lib/site-contact";

export function NeighborhoodPreviewGrid() {
  const preview = neighborhoods.slice(0, 6);
  return (
    <section
      className="cv-below-fold relative bg-background py-16 sm:py-20"
      aria-labelledby="neighborhood-preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-muted/25 p-6 shadow-sm sm:p-8 md:p-10 dark:bg-muted/15">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <MapPinned className="size-3.5 shrink-0" aria-hidden />
                Village guides · {siteIdentity.zip}
              </p>
              <h2
                id="neighborhood-preview-heading"
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
              >
                Which Elkhorn Springs village fits your lifestyle?
              </h2>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                Each sub-community has its own gates, builders, and street feel. Start with the villages buyers tour
                most—then open the full hub for the rest.
              </p>
            </div>
            <Button
              variant="outline"
              className="h-11 shrink-0 self-start border-border bg-background px-5 shadow-sm dark:bg-card/80 lg:self-auto"
              asChild
            >
              <Link href="/neighborhoods">
                View all neighborhoods
                <ArrowUpRight className="ml-2 size-4 shrink-0" aria-hidden />
              </Link>
            </Button>
          </div>

          <ul className="mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {preview.map((n) => (
              <li key={n.slug}>
                <Card className="card-elevated group h-full gap-0 overflow-hidden rounded-2xl border border-border bg-card py-0 ring-0">
                  <div
                    className="h-1 w-full bg-linear-to-r from-primary/40 via-accent/60 to-primary/30 dark:from-primary/50 dark:via-accent/40 dark:to-primary/35"
                    aria-hidden
                  />
                  <CardHeader className="rounded-none border-0 px-5 pb-2 pt-5 sm:px-6">
                    <CardTitle className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {n.shortLabel}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-5 px-5 pb-6 pt-0 sm:px-6">
                    <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">{n.description}</p>
                    <Button variant="secondary" size="sm" className="h-9 w-full sm:w-fit" asChild>
                      <Link href={`/neighborhoods/${n.slug}`}>Read the village guide</Link>
                    </Button>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
