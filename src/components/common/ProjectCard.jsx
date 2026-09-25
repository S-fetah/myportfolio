import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

/* Single reusable project card. Image cards show a preview; imageless
   entries (CV-only projects) render a clean text-only variant. No fake links. */
function ProjectCard({ title, description, image, alt, tags }) {
  return (
    <article className={styles.card}>
      {image ? (
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
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags} aria-label={`Technologies for ${title}`}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
