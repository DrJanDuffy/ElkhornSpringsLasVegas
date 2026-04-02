const agentId = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ENCODED_ID?.trim();

export function RealScoutOfficeListings() {
  if (!agentId) {
    return (
      <div className="rounded-xl border border-dashed bg-muted/40 p-8 text-center text-muted-foreground">
        <p className="font-medium text-foreground">MLS search loading soon</p>
        <p className="mt-2 text-sm">
          Set <code className="rounded bg-muted px-1">NEXT_PUBLIC_REALSCOUT_AGENT_ENCODED_ID</code>{" "}
          to enable the RealScout widget. Filter saved searches to{" "}
          <strong>89131</strong> and <strong>Elkhorn Springs</strong> in your RealScout dashboard.
        </p>
      </div>
    );
  }

  const html = `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,TC"></realscout-office-listings>`;

  return (
    <div
      className="min-h-[480px] w-full"
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}
