const links = [
  ["Events", "/events"],
  ["Sets", "/sets"],
  ["About", "/about"],
  ["Visit", "/visit"],
] as const;

export default function ProjectHeader({ title }: { title: string }) {
  return (
    <header className="events-projects-header">
      <a className="events-projects-wordmark" href="/">Astron</a>
      <div className="events-projects-heading">
        <p>{title}</p>
        <nav className="events-projects-top-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a href={href} key={href} aria-current={label === title ? "page" : undefined}>{label}</a>)}
        </nav>
      </div>
      <a className="events-projects-home" href="/" aria-label="Astron Club home">
        <img src="/astron-logo-exact.png" alt="" />
      </a>
    </header>
  );
}
