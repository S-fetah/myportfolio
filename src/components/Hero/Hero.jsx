import styles from "./HeroStyles.module.css";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import CV from "../../assets/M2-CV.pdf";
import me from "../../assets/meLastest.jpg";
import { useThemeContext } from "../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useThemeContext();
  const themeicon = theme === "light" ? sun : moon;
  const twittericon = theme === "light" ? twitterLight : twitterDark;
  const linkedinicon = theme === "light" ? linkedinLight : linkedinDark;
  const githubicon = theme === "light" ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={me}
          alt="profile Pic of abdelfetah safiddine "
        />
        <img
          className={styles.colorMode}
          src={themeicon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Abdelfetah <br />
          Safiddine
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/fettah-safi-46582b263/">
            <img src={linkedinicon} alt="Linkedin" />
          </a>

          <a href="https://x.com/abdelfetah78">
            <img src={twittericon} alt="Twitter" />
          </a>

          <a href="https://github.com/S-fetah">
            <img src={githubicon} alt="Github" />
          </a>
        </span>
        <p className={styles.discription}>
          developing modern react web apps for businesses
        </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
