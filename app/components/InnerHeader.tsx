import Link from "next/link";

const links = [
  ["Events", "/events"],
  ["Sets", "/sets"],
  ["Archive", "/archive"],
  ["About", "/about"],
  ["Visit", "/visit"],
] as const;

export default function InnerHeader() {
  return (
    <header className="inner-header">
      <Link className="inner-wordmark" href="/">Astron</Link>
      <nav aria-label="Site navigation">
        {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <Link className="menu-home" href="/" aria-label="Return to home">
        <img src="/astron-logo-exact.png" alt="" />
      </Link>
    </header>
  );
}
