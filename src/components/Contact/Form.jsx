import { useState } from "react";
import { sendEmail } from "./email";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PopUp from "../Popup/PopUp";
import styles from "./ContactStyles.module.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = () => {
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    sendEmail(templateParams).then(
      () => {
        setSending(false);
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      },
      () => {
        setSending(false);
        setError(
          "Something went wrong sending your message. Please try again or email me directly at fettahsafi.6@gmail.com."
        );
      }
    );
  };

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={sending}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className="visuallyHidden">
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="contact-name"
            placeholder="Name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email" className="visuallyHidden">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="contact-email"
            placeholder="Email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-message" className="visuallyHidden">
            Your message
          </label>
          <textarea
            name="message"
            id="contact-message"
            placeholder="Message"
            rows={7}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}
        <input
          type="submit"
          value={sending ? "Sending…" : "Send message"}
          disabled={sending}
          className={styles.submit}
        />
      </form>
      {sent && <PopUp handleConfirm={handleConfirm} />}
    </>
  );
}

export default Form;
