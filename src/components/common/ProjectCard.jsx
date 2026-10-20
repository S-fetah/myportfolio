import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

/* Single reusable project card.
   - featured: large card whose visual is a technical diagram, with a
     "Read case study" action.
   - default: compact card with optional status chip, tags, and links.
   Image cards show a real screenshot; imageless entries render a clean
   typographic variant. No fake links. */
function ProjectCard({
  title,
  category,
  description,
  image,
  alt,
  tags,
  status,
  statusKind,
  links,
  diagram,
  featured = false,
  onCaseStudy,
}) {
  return (
    <article className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}>
      {diagram ? (
        <div className={styles.diagramArea}>{diagram}</div>
      ) : image ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          width={800}
          height={450}
          className={styles.image}
        />
      ) : (
        <div className={styles.noImage} aria-hidden="true">
          <span className={styles.noImageMark}>{"</>"}</span>
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          {status && (
            <span className={styles.status} data-kind={statusKind}>
              {status}
            </span>
          )}
        </div>
        {category && <p className={styles.category}>{category}</p>}
        <p className={styles.description}>{description}</p>
        {tags && tags.length > 0 && (
          <ul className={styles.tags} aria-label={`Technologies for ${title}`}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
        {(onCaseStudy || links?.length > 0) && (
          <div className={styles.actions}>
            {onCaseStudy && (
              <button
                type="button"
                className={styles.caseButton}
                onClick={onCaseStudy}
              >
                Read case study
              </button>
            )}
            {links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
  statusKind: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })
  ),
  diagram: PropTypes.node,
  featured: PropTypes.bool,
  onCaseStudy: PropTypes.func,
};

export default ProjectCard;
