import { useState } from "react";
import { sendEmail } from "./email";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PopUp from "../Popup/PopUp";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const handleConfirm = () => {
    setDone(false);
  };
  const handleChange = (e) => {
    if (e.target.name === "name") {
      // console.log(e.target.value);
      return setName(e.target.value);
    }
    if (e.target.name === "email") {
      return setEmail(e.target.value);
    }
    if (e.target.name === "message") {
      return setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    sendEmail(templateParams).then(
      (response) => {
        setOpen(false);
        setDone(true);
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        setOpen(false);
        throw new Error(err);
      }
    );

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <div>
        {/* Loader Backdrop */}
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Name
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Name
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="message"
            required
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="hover btn" />
      </form>
      {done && <PopUp handleConfirm={handleConfirm} />}
    </>
  );
}

export default Form;
