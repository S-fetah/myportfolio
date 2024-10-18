import styles from "./skillsStyles.module.css";
import dark from "../../assets/checkmark-dark.svg";
import light from "../../assets/checkmark-light.svg";
import { useThemeContext } from "../common/ThemeContext";
import Skill from "./skill";
const skillsArr = [
  "HTML",
  "CSS",
  "ReactJs",
  "Nodejs",
  "MongoDb",
  "SQL",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "Express",
];
function Skills() {
  const { theme } = useThemeContext();
  const checkMark = theme === "light" ? light : dark;
  return (
    <section id="skills" className={styles.container}>
      <h1>skills</h1>
      <div className={styles.skillList}>
        {/* {skillsArr.map((skill) => {
          return <Skill checkMark={checkMark} skill={skill} key={skill} />;
        })} */}
        <Skill checkMark={checkMark} skill={skillsArr[0]} />
        <Skill checkMark={checkMark} skill={skillsArr[1]} />
        <Skill checkMark={checkMark} skill={skillsArr[2]} />
        <Skill checkMark={checkMark} skill={skillsArr[3]} />
        <Skill checkMark={checkMark} skill={skillsArr[4]} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <Skill checkMark={checkMark} skill={skillsArr[5]} />
        <Skill checkMark={checkMark} skill={skillsArr[6]} />
        <Skill checkMark={checkMark} skill={skillsArr[7]} />
        <Skill checkMark={checkMark} skill={skillsArr[8]} />
        <Skill checkMark={checkMark} skill={skillsArr[9]} />
      </div>
    </section>
  );
}

export default Skills;
