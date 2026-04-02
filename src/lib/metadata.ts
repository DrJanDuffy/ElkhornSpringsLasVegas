import type { Metadata } from "next";
import { siteIdentity } from "@/lib/site-contact";

const defaultUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ElkhornSpringsLasVegas.com";

export const siteMetadataBase = new URL(defaultUrl);

export function createMetadata(override: Metadata): Metadata {
  return {
    metadataBase: siteMetadataBase,
    ...override,
  };
}

export const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  locale: "en_US",
  siteName: siteIdentity.siteName,
};
