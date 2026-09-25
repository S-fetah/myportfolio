import { useEffect, useRef } from "react";
import styles from "./PopUpstyle.module.css";
import Check from "../../assets/Check.svg";
import PropTypes from "prop-types";

function PopUp({ handleConfirm }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleConfirm();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handleConfirm]);

  return (
    <div className={styles.overlay}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
      >
        <img src={Check} alt="" aria-hidden="true" className={styles.check} />
        <h3 id="popup-heading">Thanks for reaching out</h3>
        <p>I&apos;ll be in touch soon.</p>
        <button
          ref={buttonRef}
          type="button"
          className={styles.confirmButton}
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  handleConfirm: PropTypes.func.isRequired,
};

export default PopUp;
