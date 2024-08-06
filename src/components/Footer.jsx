import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <div>
          <FaLinkedin />
        </div>

        <div>
          <FaXTwitter />
        </div>
        <div>
          <FaGithub />
        </div>
        <div>
          <MdMessage />
        </div>
        <div>
          <FaDownload />
        </div>
      </div>
      <div>
        <h1>saka bolaji waheed</h1>
        <p>&copy;2024 Bolaji. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
