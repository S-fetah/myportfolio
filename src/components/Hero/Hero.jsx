import styles from "./HeroStyles.module.css";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import me from "../../assets/profile.jpg";
import resumePdf from "../../assets/safiddine_abdelfetah_resume.pdf";
import { PROFILE, SOCIALS } from "../../data/content";
import { useThemeContext } from "../common/ThemeContext";

function Hero() {
  const { theme } = useThemeContext();
  const isLight = theme === "light";

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.kickerRow}>
            <span className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Available for opportunities
            </span>
            <span className={styles.kickerDot}>•</span>
            <p className={styles.kicker}>{PROFILE.location}</p>
          </div>
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.headingLine}>{PROFILE.firstName}</span>
            <span className={styles.headingLine}>{PROFILE.lastName}</span>
          </h1>
          <p className={styles.role}>{PROFILE.title}</p>
          <p className={styles.description}>{PROFILE.valueProp}</p>
          <div className={styles.ctas}>
            <a href="#projects" className={styles.primaryButton}>
              View featured work
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Get in touch
            </a>
            <a
              href={resumePdf}
              download="safiddine_abdelfetah_resume.pdf"
              className={styles.resumeButton}
            >
              <span className={styles.downloadIcon} aria-hidden="true">
                ↓
              </span>
              Download Resume
            </a>
          </div>
          <ul className={styles.socials} aria-label="Social links">
            <li>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <img
                  src={isLight ? linkedinLight : linkedinDark}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) profile"
              >
                <img
                  src={isLight ? twitterLight : twitterDark}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <img
                  src={isLight ? githubLight : githubDark}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.portrait}>
          <img
            className={styles.photo}
            src={me}
            alt="Portrait of Safiddine Abdelfetah"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
