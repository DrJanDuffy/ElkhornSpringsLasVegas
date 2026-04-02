import Link from "next/link";
import { Button } from "@/components/ui/button";
import { phones } from "@/lib/site-contact";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="rounded-2xl border bg-card p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Ready for a curated Elkhorn Springs short list?</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Tell us your must-haves (village, beds, budget, timeline). You will get honest tradeoffs—not a
              generic portal dump.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">Request a CMA / buyer consult</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${phones.primaryCtaTel}`}>Call {phones.primaryCta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
