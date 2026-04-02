import { BadgeCheck, LineChart, Shield } from "lucide-react";
import { agent } from "@/lib/site-contact";

const items = [
  {
    title: "Diligence-first tours",
    body: "HOA docs, insurance, and timelines—reviewed with you before you write, not after.",
    icon: Shield,
  },
  {
    title: "89131 context",
    body: "Skye Canyon retail, commute patterns, and village-by-village tradeoffs explained in plain language.",
    icon: LineChart,
  },
  {
    title: "Licensed Nevada REALTOR®",
    body: `${agent.name} · ${agent.brokerage} · License ${agent.license}.`,
    icon: BadgeCheck,
  },
] as const;

export function TrustStrip() {
  return (
    <section className="border-y bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="sr-only">Why work with this Elkhorn Springs agent</h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <item.icon className="mt-1 size-6 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
