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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
        </ul>
      </nav>
      <Button>contact me</Button>
    </div>
  );
}

export default Navbar;
