import Link from "next/link";
import { Phone, Search } from "lucide-react";
import { TrackedTelLink } from "@/components/integrations/TrackedTelLink";
import { Button } from "@/components/ui/button";
import { phones } from "@/lib/site-contact";

export function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3 shadow-[0_-8px_32px_-4px_rgba(15,23,42,0.12)] backdrop-blur-lg supports-[backdrop-filter]:bg-background/90 dark:shadow-black/40 sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <Button className="min-h-11 flex-1" asChild>
          <TrackedTelLink href={`tel:${phones.primaryCtaTel}`}>
            <Phone className="mr-2 size-4" aria-hidden />
            Call now
          </TrackedTelLink>
        </Button>
        <Button variant="secondary" className="min-h-11 flex-1" asChild>
          <Link href="/homes-for-sale">
            <Search className="mr-2 size-4" aria-hidden />
            Search homes
          </Link>
        </Button>
      </div>
    </div>
  );
}
