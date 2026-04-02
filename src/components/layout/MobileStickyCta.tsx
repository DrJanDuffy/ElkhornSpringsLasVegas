import Link from "next/link";
import { Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phones } from "@/lib/site-contact";

export function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-background/90 sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <Button className="flex-1" asChild>
          <a href={`tel:${phones.primaryCtaTel}`}>
            <Phone className="mr-2 size-4" aria-hidden />
            Call now
          </a>
        </Button>
        <Button variant="secondary" className="flex-1" asChild>
          <Link href="/homes-for-sale">
            <Search className="mr-2 size-4" aria-hidden />
            Search homes
          </Link>
        </Button>
      </div>
    </div>
  );
}
