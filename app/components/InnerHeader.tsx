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
      <a className="inner-wordmark" href="/">Astron</a>
      <nav aria-label="Site navigation">
        {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="menu-home" href="/" aria-label="Return to home">
        <img src="/astron-logo-exact.png" alt="" />
      </a>
    </header>
  );
}
