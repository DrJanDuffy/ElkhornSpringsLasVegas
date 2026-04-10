/**
 * Weekend open-house copy and map URLs. Update before each open-house weekend.
 * Event JSON-LD is emitted only when every entry in openHouseEvents passes validation.
 */

import { agent, phones, siteIdentity } from "@/lib/site-contact";

/** Google My Maps layer — embed (Share → Embed). Override with NEXT_PUBLIC_OPEN_HOUSE_MAP_EMBED on Vercel. */
const DEFAULT_MAP_EMBED =
  "https://www.google.com/maps/d/u/0/embed?mid=12gQ1w5bzxrQ41HSGCdEJWFfhMtSkBwI&ehbc=2E312F";

/** Same map, full-screen in browser (viewer link from My Maps Share). */
const DEFAULT_MAP_VIEWER =
  "https://www.google.com/maps/d/viewer?mid=12gQ1w5bzxrQ41HSGCdEJWFfhMtSkBwI";

export type OpenHouseEventInput = {
  name: string;
  startDate: string;
  endDate: string;
  /** Street address of the open house (required for offline Event + Place). */
  streetAddress: string;
  isOnline?: boolean;
};

export type ValidatedOpenHouseEvent = Omit<OpenHouseEventInput, "isOnline">;

export const openHouseHeadline = `Open houses in ${siteIdentity.primaryArea} (${siteIdentity.zip})`;

export const openHouseScheduleLine =
  "Saturday–Sunday, April 11–12, 2026 — confirm times below or call before you drive over.";

export const openHouseSubcopy = `Tour-ready homes in the master plan this weekend. Questions? ${agent.name} is at ${phones.primaryCta}.`;

export function getMapEmbedSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_OPEN_HOUSE_MAP_EMBED?.trim();
  return fromEnv || DEFAULT_MAP_EMBED;
}

export function getMapOpenInNewTabUrl(): string {
  return DEFAULT_MAP_VIEWER;
}

/**
 * Add one object per open house when you want Event rich results. Leave empty to skip Event JSON-LD.
 * Example:
 * { name: "123 Main St open house", startDate: "2026-04-11T13:00:00-07:00", endDate: "2026-04-11T16:00:00-07:00", streetAddress: "123 Main St" }
 */
export const openHouseEvents: OpenHouseEventInput[] = [];

function isValidIsoDate(s: string): boolean {
  const t = Date.parse(s);
  return !Number.isNaN(t);
}

/** Returns validated events for JSON-LD, or null if none configured or any row is invalid. */
export function getValidatedOpenHouseEvents(): ValidatedOpenHouseEvent[] | null {
  if (openHouseEvents.length === 0) return null;
  const out: ValidatedOpenHouseEvent[] = [];
  for (const e of openHouseEvents) {
    if (!e.name?.trim() || !e.streetAddress?.trim()) return null;
    if (!isValidIsoDate(e.startDate) || !isValidIsoDate(e.endDate)) return null;
    if (e.isOnline) return null;
    out.push({
      name: e.name.trim(),
      streetAddress: e.streetAddress.trim(),
      startDate: e.startDate,
      endDate: e.endDate,
    });
  }
  return out;
}

export const openHouseFaqs: { question: string; answer: string }[] = [
  {
    question: `Where is Elkhorn Springs in Las Vegas?`,
    answer: `Elkhorn Springs is a master-planned area in northwest Las Vegas, Nevada, centered near ZIP ${siteIdentity.zip}. Use the map on this page or call ${phones.primaryCta} for village-specific directions.`,
  },
  {
    question: `Do I need an appointment for an open house in ${siteIdentity.zip}?`,
    answer: `Open houses listed for this weekend are typically drop-in during posted hours. If you want a private tour or a different time, call ${phones.primaryCta} and ask for ${agent.name}.`,
  },
  {
    question: `What should I bring to an open house in Elkhorn Springs?`,
    answer: `Bring a photo ID if the community is gated, comfortable shoes, and your timeline and budget so ${agent.name} can focus on homes that fit. Call ${phones.primaryCta} if you are unsure which gate or village to use.`,
  },
  {
    question: `How do I get listings that match my criteria in ${siteIdentity.primaryArea}?`,
    answer: `Start with the MLS search on this site (Homes for sale), then call ${phones.primaryCta} for a curated short list and honest tradeoffs between villages and resale versus new construction.`,
  },
];
