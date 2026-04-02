import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agent, phones, siteIdentity } from "@/lib/site-contact";

export function HeroBuyer() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden />
            Las Vegas {siteIdentity.zip} · {siteIdentity.primaryArea}
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Elkhorn Springs homes, neighborhoods, and real answers—without the generic portal noise.
          </h1>
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">
            {agent.name} helps buyers and sellers navigate gated villages, new construction, resale timelines,
            and HOA diligence in {siteIdentity.primaryArea}. Start with search, compare villages, or call for a
            curated short list.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" asChild>
              <Link href="/homes-for-sale">
                View active listings
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/neighborhoods">Explore neighborhoods</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${phones.primaryCtaTel}`}>
                <Phone className="mr-2 size-4" aria-hidden />
                Call {phones.primaryCta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
