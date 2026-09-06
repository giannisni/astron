import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./mirrors.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Astron Club — Athens";
  const description = "Electronic music and club culture at 121 Konstantinoupoleos, Athens.";

  return {
    title,
    description,
    icons: { icon: "/astron-logo-exact.png", shortcut: "/astron-logo-exact.png" },
    openGraph: { title, description, url: origin, siteName: "Astron Club", images: [{ url: `${origin}/astron-social-card-v2.png`, width: 1729, height: 910, alt: "Astron Club atmosphere" }], type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/astron-social-card-v2.png`] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
