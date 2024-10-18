import styles from "./FooterStyles.module.css";
function Footer() {
  return (
    <section className={styles.container} id="footer">
      <p>
        &#169; 2024 Abdelfetah Safiddine, <br />
        All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
