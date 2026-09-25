import Form from "./Form";
import Reveal from "../common/Reveal";
import { PROFILE } from "../../data/content";

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="sectionInner">
        <Reveal>
          <p className="sectionKicker">Contact</p>
          <h2 id="contact-heading" className="sectionTitle">
            Let&apos;s work together
          </h2>
          <p className="sectionLead">
            Have a project, a role, or just a question? Send a message — or
            reach me directly at{" "}
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Form />
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
