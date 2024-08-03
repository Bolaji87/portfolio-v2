import Button from "./Button";
import "./styles.css";
function Navbar() {
  return (
    <div id="nav-bar">
      <h1>
        Bo<span className="la">la</span>
        <span className="ji">ji</span>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
      <Button>contact me</Button>
    </div>
  );
}

export default Navbar;
