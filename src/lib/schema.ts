import {
  agent,
  emails,
  getPostalAddress,
  getStreetAddress,
  phones,
  siteIdentity,
} from "@/lib/site-contact";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ElkhornSpringsLasVegas.com";

export function localBusinessAndAgentJsonLd() {
  const addr = getPostalAddress();
  const postalAddress: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: addr.addressLocality,
    addressRegion: addr.addressRegion,
    postalCode: addr.postalCode,
    addressCountry: addr.addressCountry,
  };
  if (addr.streetAddress) {
    postalAddress.streetAddress = addr.streetAddress;
  }

  const businessId = `${siteUrl}/#localbusiness`;
  const agentId = `${siteUrl}/#agent`;

  const agentNode = {
    "@type": "RealEstateAgent",
    "@id": agentId,
    name: agent.name,
    url: siteUrl,
    telephone: phones.primaryCtaTel,
    email: emails.primary,
    identifier: agent.license,
    worksFor: { "@id": businessId },
    address: { ...postalAddress },
    areaServed: {
      "@type": "Place",
      name: `${siteIdentity.primaryArea}, ${siteIdentity.city}, ${siteIdentity.state} ${siteIdentity.zip}`,
    },
  };

  const businessNode = {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: `${agent.name} | ${siteIdentity.siteName}`,
    url: siteUrl,
    telephone: phones.primaryCtaTel,
    email: emails.primary,
    address: { ...postalAddress },
    areaServed: agentNode.areaServed,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [businessNode, agentNode],
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function blogPostingJsonLd(input: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  const addr = getPostalAddress();
  const street = getStreetAddress();
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    url: input.url,
    author: {
      "@type": "Person",
      name: agent.name,
    },
    publisher: {
      "@type": "Organization",
      name: agent.brokerage,
      address: {
        "@type": "PostalAddress",
        ...(street ? { streetAddress: street } : {}),
        addressLocality: addr.addressLocality,
        addressRegion: addr.addressRegion,
        postalCode: addr.postalCode,
        addressCountry: addr.addressCountry,
      },
    },
  };
}
