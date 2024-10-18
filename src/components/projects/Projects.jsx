import styles from "./projectStyles.module.css";
import watch from "../../assets/Watchs.png";
import Driver from "../../assets/Driver.png";

import library from "../../assets/Library.png";
import bookPrinting from "../../assets/printerLibrary.png";
import ProjectCard from "../common/ProjectCard";
function Projects() {
  return (
    <section className={styles.container}>
      <h1>projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard pics={{ library, bookPrinting, watch, Driver }} />
      </div>
    </section>
  );
}

export default Projects;
