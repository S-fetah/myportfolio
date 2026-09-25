import styles from "./FooterStyles.module.css";
import { PROFILE, SOCIALS } from "../../data/content";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {year} {PROFILE.name} · {PROFILE.title}
        </p>
        <ul className={styles.links} aria-label="Social links">
          <li>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer">
              X
            </a>
          </li>
        </ul>
        <a href="#home" className={styles.topLink}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
