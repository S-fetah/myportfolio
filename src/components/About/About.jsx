import styles from "./AboutStyles.module.css";
import { LANGUAGES, PROFILE } from "../../data/content";
import Reveal from "../common/Reveal";

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="sectionInner">
        <Reveal>
          <p className="sectionKicker">About</p>
          <h2 id="about-heading" className="sectionTitle">
            Full lifecycle, backend to frontend
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className={styles.body}>
            {PROFILE.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <dl className={styles.facts}>
            <div>
              <dt>Location</dt>
              <dd>{PROFILE.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+213659235442">{PROFILE.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{LANGUAGES.join(" · ")}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
