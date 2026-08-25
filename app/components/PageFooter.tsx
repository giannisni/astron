import { instagram, soundcloud } from "../data";

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <a href="/">Astron Club</a>
      <p>121 Konstantinoupoleos<br />Athens 104 47, Greece</p>
      <div>
        <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href={soundcloud} target="_blank" rel="noreferrer">SoundCloud ↗</a>
      </div>
    </footer>
  );
}
