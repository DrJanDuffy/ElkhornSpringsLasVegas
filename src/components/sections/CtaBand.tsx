import Link from "next/link";
import { TrackedTelLink } from "@/components/integrations/TrackedTelLink";
import { Button } from "@/components/ui/button";
import { phones } from "@/lib/site-contact";

export function CtaBand() {
  return (
    <section className="cv-below-fold mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl p-[1px] shadow-lg shadow-primary/5">
        <div className="cta-glow absolute inset-0 rounded-3xl" aria-hidden />
        <div className="relative rounded-[calc(1.5rem-1px)] border border-border/60 bg-card/95 p-8 backdrop-blur-md sm:p-10 md:p-12 dark:bg-card/90">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="max-w-xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Buyer consult</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready for a curated Elkhorn Springs short list?
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Tell us your must-haves (village, beds, budget, timeline). You will get honest tradeoffs—not a
                generic portal dump.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:max-w-md sm:flex-row md:w-auto md:flex-col lg:flex-row">
              <Button size="lg" className="min-h-11 w-full shadow-md shadow-primary/15 sm:flex-1 md:w-full lg:flex-initial lg:min-w-[200px]" asChild>
                <Link href="/contact">Request a CMA / buyer consult</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-11 w-full border-primary/25 bg-background/80 sm:flex-1 md:w-full lg:flex-initial" asChild>
                <TrackedTelLink href={`tel:${phones.primaryCtaTel}`}>Call {phones.primaryCta}</TrackedTelLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
