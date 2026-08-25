import type { Metadata } from "next";

export function pageMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} — Astron Club`;
  return {
    title: fullTitle,
    description,
    openGraph: { title: fullTitle, description, images: [{ url: "/astron-social-card-v2.png", width: 1729, height: 910, alt: "Astron Club atmosphere" }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/astron-social-card-v2.png"] },
  };
}
