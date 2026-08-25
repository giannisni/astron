import Link from "next/link";
import OrbitField from "./components/OrbitField";

const navigation = [
  ["Events", "/events"],
  ["Sets", "/sets"],
  ["Archive", "/archive"],
  ["About", "/about"],
  ["Visit", "/visit"],
] as const;

export default function Home() {
  return (
    <main className="home-screen">
      <OrbitField />
      <div className="grain" aria-hidden="true" />
      <Link className="home-wordmark" href="/" aria-label="Astron Club home">Astron</Link>
      <nav className="home-nav" aria-label="Main navigation">
        {navigation.map(([label, href], index) => (
          <Link href={href} key={href}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {label}
          </Link>
        ))}
      </nav>
      <img className="home-symbol" src="/astron-logo-exact.png" alt="Astron spiral symbol" />
      <div className="home-meta">
        <p>Athens · 121 Konstantinoupoleos</p>
        <p>Electronic music &amp; club culture</p>
      </div>
      <div className="home-socials">
        <a href="https://www.instagram.com/astronclub/" target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href="https://soundcloud.com/astron-bar" target="_blank" rel="noreferrer">SoundCloud ↗</a>
      </div>
    </main>
  );
}
