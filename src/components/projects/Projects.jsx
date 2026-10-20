import { useState } from "react";
import styles from "./projectStyles.module.css";
import printerLibrary from "../../assets/printerLibrary.png";
import library from "../../assets/Library.png";
import driver from "../../assets/Driver.png";
import fmdStore from "../../assets/fmdStore.png";
import fennecMobile from "../../assets/fennecMobile.jpg";
import medicare from "../../assets/medicare.jpg";
import makseb from "../../assets/makseb.jpg";
import autoImport from "../../assets/autoImport.jpg";
import travelLeads from "../../assets/travelLeads.jpg";
import offlineMaps from "../../assets/offlineMaps.jpg";
import ProjectCard from "../common/ProjectCard";
import CaseStudyModal from "../common/CaseStudyModal";
import Reveal from "../common/Reveal";
import FennecArchitecture from "../common/diagrams/FennecArchitecture";
import SahaMindSystem from "../common/diagrams/SahaMindSystem";
import {
  EARLIER_PROJECTS,
  FEATURED_PROJECTS,
  MORE_PROJECTS,
} from "../../data/content";

const IMAGES = {
  printerLibrary,
  library,
  driver,
  fmdStore,
  fennecMobile,
  medicare,
  makseb,
  autoImport,
  travelLeads,
  offlineMaps,
};

/* diagram: key resolved to a rendered component, like IMAGES for photos. */
function diagramFor(key) {
  if (key === "fennec") return <FennecArchitecture />;
  if (key === "saha") return <SahaMindSystem />;
  return null;
}

function Projects() {
  const [caseStudy, setCaseStudy] = useState(null);

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="sectionInner">
        <Reveal>
          <p className="sectionKicker">Projects</p>
          <h2 id="projects-heading" className="sectionTitle">
            From production systems to applied research
          </h2>
          <p className="sectionLead">
            Two deep case studies — the travel-commerce backend I run in
            production and the LLM-agent system from my Master&apos;s
            dissertation — then shipped products, work in progress, and
            earlier client work.
          </p>
        </Reveal>

        <Reveal>
          <h3 className={styles.subhead}>Featured case studies</h3>
        </Reveal>
        <div className={styles.featuredGrid}>
          {FEATURED_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 2) * 100}>
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                status={project.status}
                statusKind={project.statusKind}
                tags={project.stack.slice(0, 6)}
                links={project.links}
                diagram={diagramFor(project.diagram)}
                featured
                onCaseStudy={() => setCaseStudy(project)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className={styles.subhead}>More projects</h3>
        </Reveal>
        <div className={styles.grid}>
          {MORE_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 2) * 80}>
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                status={project.status}
                statusKind={project.statusKind}
                image={project.image ? IMAGES[project.image] : null}
                alt={project.alt}
                tags={project.tags}
                links={project.links}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className={styles.subhead}>Earlier client &amp; academic work</h3>
        </Reveal>
        <div className={styles.grid}>
          {EARLIER_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 2) * 80}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image ? IMAGES[project.image] : null}
                alt={project.alt}
                tags={project.tags}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {caseStudy && (
        <CaseStudyModal
          project={caseStudy}
          diagram={diagramFor(caseStudy.diagram)}
          onClose={() => setCaseStudy(null)}
        />
      )}
    </section>
  );
}

export default Projects;
