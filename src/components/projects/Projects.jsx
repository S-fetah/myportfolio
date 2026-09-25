import styles from "./projectStyles.module.css";
import printerLibrary from "../../assets/printerLibrary.png";
import library from "../../assets/Library.png";
import driver from "../../assets/Driver.png";
import ProjectCard from "../common/ProjectCard";
import Reveal from "../common/Reveal";
import { PROJECTS } from "../../data/content";

const IMAGES = { printerLibrary, library, driver };

function Projects() {
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
            Selected work
          </h2>
          <p className="sectionLead">
            Client sites and academic systems with real users — plus current
            architecture work drawn from production experience.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 2) * 100}>
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
    </section>
  );
}

export default Projects;
