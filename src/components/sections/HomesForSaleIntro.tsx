import Link from "next/link";
import { Search } from "lucide-react";
import { siteIdentity } from "@/lib/site-contact";

export function HomesForSaleIntro() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 dark:bg-muted/20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        aria-hidden
      >
        <div className="absolute right-0 top-0 size-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-40 rounded-full bg-accent/40 blur-3xl dark:bg-accent/20" />
      </div>
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Search className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">MLS search</p>
            <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              Active listings in {siteIdentity.primaryArea} ({siteIdentity.zip})
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Save a RealScout preset for <strong className="text-foreground">89131</strong> and{" "}
              <strong className="text-foreground">Elkhorn Springs</strong> so buyers land on the right
              inventory—then pair search with a village guide before you tour.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 text-sm">
          <Link
            className="rounded-full border border-border bg-background/90 px-3 py-1.5 font-medium text-primary underline-offset-4 hover:underline dark:bg-card/80"
            href="/neighborhoods/the-preserve"
          >
            The Preserve
          </Link>
          <Link
            className="rounded-full border border-border bg-background/90 px-3 py-1.5 font-medium text-primary underline-offset-4 hover:underline dark:bg-card/80"
            href="/neighborhoods/elkhorn-grove"
          >
            Elkhorn Grove
          </Link>
          <Link
            className="rounded-full border border-border bg-background/90 px-3 py-1.5 font-medium text-primary underline-offset-4 hover:underline dark:bg-card/80"
            href="/neighborhoods"
          >
            All villages
          </Link>
        </div>
      </div>
    </div>
  );
}
