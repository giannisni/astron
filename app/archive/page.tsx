import ArchiveGallery from "../components/ArchiveGallery";
import InnerHeader from "../components/InnerHeader";
import PageFooter from "../components/PageFooter";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Archive", "A visual archive of past Astron Club nights and posters.");

export default function ArchivePage() {
  return (
    <main className="inner-page">
      <InnerHeader />
      <section className="page-intro archive-page-intro">
        <p className="page-index">03 / Archive</p>
        <h1>Past<br />events</h1>
        <p>Every night leaves a trace. Select a poster to open the archive.</p>
      </section>
      <ArchiveGallery />
      <PageFooter />
    </main>
  );
}
