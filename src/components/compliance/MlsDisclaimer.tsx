import { agent } from "@/lib/site-contact";

export function MlsDisclaimer({ className }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-muted-foreground ${className ?? ""}`}>
      Listing data provided in part by the MLS. Information deemed reliable but not guaranteed.
      Dr. Jan Duffy, {agent.brokerage}. Nevada license {agent.license}.
    </p>
  );
}
