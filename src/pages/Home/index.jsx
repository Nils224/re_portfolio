import React from "react";
import "./home.css";
import "../../index.css";
import emailIcon from "../../assets/images/emailIcon.png"
import ghIcon from "../../assets/images/GitHubIcon.png"
import liIcon from "../../assets/images/linkedinIcon.png"
import nerdFace from "../../assets/images/me.png"

function Home() {
  return (
    <main className="main mobile-12">

      <div className="content">
        <h1 className="heading"> About Me </h1>

        <img className="profile-image" src={nerdFace} alt="nerd-face"/> 

        <p className="profile_text"> 
          Hi my name is Nilesh Patel. I am an aspiring web developer. I currently work as an optometrist but feel it’s time for a change.
          I have a  honorary bachelor of science degree to my name, for which I am proud of but I feel web developing is my calling, I hope to progress further in the field of programming and move into the game development world. 
          <br /> <br />
          I grew up playing awesome games such as Zelda, Mario smash Bros, Halo and Assassins Creed to name a few! I have always been intrigued on how games are made.
          <br /> <br />
          I am now a proud father to my one year old daughter and try and be the best role model for her as she grows up.
        </p>
      </div>

      <div className="icons">
        <a className= "link" href="mailto:npatel224@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="index-icon" src={emailIcon} alt="email-icon"/>
        </a>
        <a className= "link" href="https://github.com/Nils224" target="_blank" rel="noopener noreferrer">
          <img className="index-icon" src={ghIcon} alt="GitHub-icon"/>
        </a>
        <a className= "link" href="https://www.linkedin.com/in/nilesh-patel-6b093783/#" target="_blank" rel="noopener noreferrer">
          <img className="index-icon" src={liIcon} alt="LinkedIn-icon"/>
        </a>
      </div>
    </main>
  );
}

export default Home;
