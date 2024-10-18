import PropTypes from "prop-types";
function ProjectCard(props) {
  const { bookPrinting, library, watch, Driver } = props.pics;
  return (
    <>
      <a href="_">
        <img src={bookPrinting} alt="clock Pic" />
        <h3> Printing Workshop </h3>
        <p> get your book printed now!</p>
      </a>
      <a href="_">
        <img src={watch} alt="clock Pic" />
        <h3>Timeless Pick </h3>
        <p>watches guide</p>
      </a>
      <a href="_">
        <img src={library} alt="online library" />
        <h3>Online library</h3>
        <p>free translated books!!</p>
      </a>
      <a href="_">
        <img src={Driver} alt="online library" />
        <h3>Driver APP</h3>
        <p>React-native univ App</p>
      </a>
    </>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  pics: PropTypes.shape({
    bookPrinting: PropTypes.string.isRequired,
    library: PropTypes.string.isRequired,
    watch: PropTypes.string.isRequired,
    Driver: PropTypes.string.isRequired,
  }).isRequired,
};
