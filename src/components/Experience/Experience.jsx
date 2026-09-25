import styles from "./ExperienceStyles.module.css";
import { EDUCATION, EXPERIENCE } from "../../data/content";
import Reveal from "../common/Reveal";

function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="sectionInner">
        <Reveal>
          <p className="sectionKicker">Experience</p>
          <h2 id="experience-heading" className="sectionTitle">
            Production systems, end to end
          </h2>
          <p className="sectionLead">
            Most recent first — from operating a live travel platform to
            freelance client work and academic systems.
          </p>
        </Reveal>
        <ol className={styles.timeline}>
          {EXPERIENCE.map((job, index) => (
            <li key={`${job.company}-${job.period}`}>
              <Reveal delay={Math.min(index, 2) * 100}>
                <article className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3>
                        {job.role} — {job.company}
                      </h3>
                      <p className={styles.period}>{job.period}</p>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    {job.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 32)}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <h3 className={styles.eduHeading}>Education</h3>
          <ul className={styles.eduList}>
            {EDUCATION.map((edu) => (
              <li key={edu.degree} className={styles.eduCard}>
                <p className={styles.eduSchool}>{edu.school}</p>
                <p className={styles.eduDegree}>
                  {edu.degree} · {edu.period}
                </p>
                <p className={styles.eduDetail}>{edu.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
