import styles from "./skillsStyles.module.css";
import { LANGUAGES, SKILL_GROUPS } from "../../data/content";
import Reveal from "../common/Reveal";

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="sectionInner">
        <Reveal>
          <p className="sectionKicker">Skills</p>
          <h2 id="skills-heading" className="sectionTitle">
            Grouped by where they ship
          </h2>
          <p className="sectionLead">
            The working stack behind the experience above — frontend to
            infrastructure to the integrations that tie it together.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={Math.min(index, 3) * 80}>
              <article className={styles.group}>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <ul className={styles.tags}>
                  {group.skills.map((skill) => (
                    <li key={skill} className={styles.tag}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className={styles.languages}>
            <span className={styles.languagesLabel}>Languages</span>
            {LANGUAGES.join(" · ")} — professional proficiency or above.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
