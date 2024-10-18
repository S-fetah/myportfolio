import PropTypes from "prop-types";
function Skill({ checkMark, skill }) {
  return (
    <span>
      <img src={checkMark} alt="" />
      <p>{skill}</p>
    </span>
  );
}
Skill.propTypes = {
  checkMark: PropTypes.node.isRequired,
  skill: PropTypes.node.isRequired,
};

export default Skill;
