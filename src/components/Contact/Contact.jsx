import styles from "./ContactStyles.module.css";
import Form from "./Form";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>

      <Form />
    </section>
  );
}

export default Contact;
