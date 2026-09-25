import { useEffect, useState } from "react";
import styles from "./NavStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import CV from "../../assets/Fettah_Safi_CV_ATS_v3.pdf";
import { NAV_LINKS } from "../../data/content";
import { useThemeContext } from "../common/ThemeContext";

function Nav() {
  const { theme, toggleTheme } = useThemeContext();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#home" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            FS
          </span>
          <span className={styles.brandName}>Fettah Safi</span>
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className={styles.menuIcon}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

        <ul
          id="primary-navigation"
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  active === link.href.slice(1) ? styles.linkActive : undefined
                }
                aria-current={
                  active === link.href.slice(1) ? "true" : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
            aria-pressed={theme === "dark"}
          >
            <img src={themeIcon} alt="" aria-hidden="true" />
          </button>
          <a
            href={CV}
            download="Fettah_Safi_CV.pdf"
            className={styles.resumeButton}
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
