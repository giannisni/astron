import { instagram, soundcloud, residentAdvisor } from "../data";

export default function PageFooter() {
  return (
    <footer className="td-footer">
      <a className="td-footer-brand" href="/"><img src="/astron-logo-exact.png" alt="" />Astron</a>
      <div className="td-footer-body">
      <div className="td-footer-intro"><p>Electronic music and club culture in Athens, Greece.</p><a className="td-address" href="/visit">121 Konstantinoupoleos, 104 47 <span>↗</span></a></div>
      <nav aria-label="Social and information links">
        <a href="/about">Information</a>
        <a href="/visit">Visit</a>
        <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href={soundcloud} target="_blank" rel="noreferrer">SoundCloud ↗</a>
        <a href={residentAdvisor} target="_blank" rel="noreferrer">Resident Advisor ↗</a>
      </nav>
      <p className="td-footer-credit">Astron Club<br />Athens, Greece</p>
      </div>
    </footer>
  );
}
