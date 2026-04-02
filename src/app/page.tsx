import { CtaBand } from "@/components/sections/CtaBand";
import { HeroBuyer } from "@/components/sections/HeroBuyer";
import { NeighborhoodPreviewGrid } from "@/components/sections/NeighborhoodPreviewGrid";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function HomePage() {
  return (
    <>
      <HeroBuyer />
      <TrustStrip />
      <NeighborhoodPreviewGrid />
      <CtaBand />
    </>
  );
}
