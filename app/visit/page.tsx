import ProjectHeader from "../components/ProjectHeader";
import PageFooter from "../components/PageFooter";
import { instagram, residentAdvisor } from "../data";
import { pageMetadata } from "../siteMetadata";

export const metadata = pageMetadata("Visit", "Find Astron Club at 121 Konstantinoupoleos in Votanikos, Athens.");

export default function VisitPage() {
  return (
    <main className="inner-page visit-page">
      <ProjectHeader title="Visit" />
      <section className="visit-hero">
        <p className="page-index">05 / Visit</p>
        <h1>121<br />Konstantinoupoleos</h1>
        <div className="visit-grid">
          <p>Votanikos<br />Athens 104 47<br />Greece</p>
          <div>
            <a href="https://maps.google.com/?q=121+Konstantinoupoleos+Athens" target="_blank" rel="noreferrer">Get directions ↗</a>
            <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href={residentAdvisor} target="_blank" rel="noreferrer">Resident Advisor ↗</a>
          </div>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
