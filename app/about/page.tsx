import InnerHeader from "../components/InnerHeader";
import PageFooter from "../components/PageFooter";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("About", "Astron is a room for adventurous electronic music and Athens club culture.");

export default function AboutPage() {
  return (
    <main className="inner-page dark-page about-page">
      <InnerHeader />
      <section className="page-intro about-intro">
        <p className="page-index">04 / About</p>
        <h1>A room<br />in motion</h1>
      </section>
      <section className="story-grid">
        <p className="story-lead">Astron is a venue for electronic music and club culture—built around adventurous programming, a powerful system and the collective energy of the floor.</p>
        <p>After sixteen formative years at Taki 3 in Psiri, Astron moved into its present home in Votanikos. The scale changed; the intent did not.</p>
        <p>Local currents meet international selectors across techno, electro, experimental sound and the spaces between. Come as you are. Stay for the whole arc.</p>
        <img src="/astron-logo-exact.png" alt="Astron spiral symbol" />
      </section>
      <PageFooter />
    </main>
  );
}
