import InnerHeader from "../components/InnerHeader";
import PageFooter from "../components/PageFooter";
import { soundcloud } from "../data";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Sets", "Live recordings and sessions from the Astron sound archive.");

export default function SetsPage() {
  return (
    <main className="inner-page dark-page">
      <InnerHeader />
      <section className="page-intro sets-intro-page">
        <p className="page-index">02 / Sets</p>
        <h1>From<br />the room</h1>
        <p>Recordings from nights past. Press play and return to the floor.</p>
      </section>
      <section className="player-section">
        <iframe
          title="Astron sets on SoundCloud"
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          loading="lazy"
          src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F29135206&show_artwork=true&maxheight=450&color=d5d3c8"
        />
        <div className="player-notes">
          <p>Constantine · 02.02.19<br />Bedouin Records at Astron Bar</p>
          <p>Makaton Live · 17.02.18<br />Astron Bar</p>
          <a href={soundcloud} target="_blank" rel="noreferrer">Open SoundCloud ↗</a>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
