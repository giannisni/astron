const links = [
  ["Events", "/events"],
  ["Sets", "/sets"],
  ["Archive", "/archive"],
  ["About", "/about"],
  ["Visit", "/visit"],
] as const;

export default function ProjectHeader({ title }: { title: string }) {
  return (
    <header className="td-header">
      <a className="td-brand" href="/" aria-label="Astron Club home"><img src="/astron-logo-exact.png" alt="" /></a>
        <nav aria-label="Primary navigation">
          {links.map(([label, href]) => <a href={href} key={href} aria-current={label === title ? "page" : undefined}>{label}</a>)}
        </nav>
    </header>
  );
}
