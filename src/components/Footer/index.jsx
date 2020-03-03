import React from "react";
import "./footer.css";
import emailIcon from "../../assets/images/emailIcon.png"
import ghIcon from "../../assets/images/GitHubIcon.png"
import liIcon from "../../assets/images/linkedinIcon.png"

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <p> Copyright </p>
        <span class="footer-icons">
          <a href="mailto:npatel224@gmail.com" target="_blank" rel="noopener noreferrer">
            <img 
              className="footer-icon"
              src={emailIcon}
              alt="email-icon" />
          </a>
          <a href="https://github.com/Nils224" target="_blank" rel="noopener noreferrer">
              <img class="footer-icon" src={ghIcon} alt="GitHub-icon" />
          </a>
          <a href="https://www.linkedin.com/in/nilesh-patel-6b093783/#"  target="_blank" rel="noopener noreferrer">
              <img class="footer-icon" src={liIcon} alt="LinkedIn-icon" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
