import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { neighborhoods } from "@/lib/neighborhoods";

export function NeighborhoodPreviewGrid() {
  const preview = neighborhoods.slice(0, 6);
  return (
    <section className="mx-auto max-w-6xl space-y-8 px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Which Elkhorn Springs village fits your lifestyle?
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            The master plan includes multiple sub-communities—each with different gates, builders, and street
            character. Pick a village to see what buyers usually compare first.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/neighborhoods">
            View all neighborhoods
            <ArrowUpRight className="ml-2 size-4" aria-hidden />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((n) => (
          <Card key={n.slug} className="shadow-sm transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{n.shortLabel}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{n.description}</p>
              <Button variant="secondary" size="sm" asChild>
                <Link href={`/neighborhoods/${n.slug}`}>Read the village guide</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
