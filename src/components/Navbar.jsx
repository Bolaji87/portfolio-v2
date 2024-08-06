import Button from "./Button";
import { FaBold } from "react-icons/fa";
import "./styles.css";
function Navbar() {
  return (
    <div id="nav-bar">
      <h1>
        <FaBold />
        <span className="o">o</span>
        <span className="la">la</span>
        <span className="ji">ji</span>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#skills-section">Skills</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
        </ul>
      </nav>
      <Button>
        <a href="#contact">contact me</a>
      </Button>
    </div>
  );
}

export default Navbar;
