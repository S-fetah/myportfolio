import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./CaseStudyModal.module.css";

/* Accessible expandable case study: Esc to close, focus is trapped inside
   while open and returned to the opener on close, background scroll locked. */
function CaseStudyModal({ project, diagram, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const lastActive = useRef(null);

  useEffect(() => {
    lastActive.current = document.activeElement;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (lastActive.current && typeof lastActive.current.focus === "function") {
        lastActive.current.focus();
      }
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className={styles.dialog}
      >
        <header className={styles.header}>
          <div>
            <p className={styles.kicker}>{project.category}</p>
            <h3 id="case-study-title" className={styles.title}>
              {project.title}
            </h3>
            <p className={styles.meta}>
              <span className={styles.status} data-kind={project.statusKind}>
                {project.status}
              </span>
              <span className={styles.role}>{project.role}</span>
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close case study"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </header>

        <div className={styles.content}>
          {diagram && (
            <figure className={styles.diagram}>
              {diagram}
              <figcaption className={styles.diagramCaption}>
                High-level architecture, drawn from the implemented system.
              </figcaption>
            </figure>
          )}

          {project.caseStudy.map((section) => (
            <section
              key={section.heading}
              className={styles.section}
              aria-labelledby={undefined}
            >
              <h4 className={styles.sectionHeading}>{section.heading}</h4>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className={styles.bullets}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 32)}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {project.stack && (
            <section className={styles.section}>
              <h4 className={styles.sectionHeading}>Stack</h4>
              <ul className={styles.tags} aria-label={`Technologies for ${project.title}`}>
                {project.stack.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.links?.length > 0 && (
            <div className={styles.links}>
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

CaseStudyModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    status: PropTypes.string,
    statusKind: PropTypes.string,
    role: PropTypes.string,
    caseStudy: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        paragraphs: PropTypes.arrayOf(PropTypes.string),
        bullets: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    stack: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })
    ),
  }).isRequired,
  diagram: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default CaseStudyModal;
