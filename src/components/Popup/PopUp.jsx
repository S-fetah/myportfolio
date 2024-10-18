import styles from "./PopUpstyle.module.css";
import Check from "../../assets/Check.svg";
import PropTypes from "prop-types";
function PopUp({ handleConfirm }) {
  return (
    <aside className={styles.modalContainer}>
      <div className={styles.modal}>
        <img src={Check} alt="Done" className={styles.Done} />
        <h3>Thanks For Contacting </h3>

        <h4>I`ll Be In Touch Soon.</h4>

        <button
          type="button"
          className={styles.modalConfirmBtn}
          onClick={handleConfirm}
        >
          confirm
        </button>
      </div>
    </aside>
  );
}

PopUp.propTypes = {
  handleConfirm: PropTypes.node.isRequired,
};

export default PopUp;
