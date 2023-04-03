import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about_me">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            Hi, I'm Hasnain Ahmed Miraj, a software engineering enthusiast with
            a passion for solving complex problems. I am constantly seeking
            opportunities to challenge myself and improve my skills in the field
            of web development. As a developer, I enjoy working on projects that
            have the potential to make a positive impact on people's lives. My
            goal is to create efficient, user-friendly software that can be
            scaled to accommodate the needs of large systems. I believe that
            programming is not just about writing code, but also about designing
            elegant solutions to real-world problems. In addition to coding, I
            enjoy learning about new technologies and keeping up with industry
            trends. I am always seeking new challenges and opportunities to
            expand my skillset. In the future, I aspire to work on complex
            systems and collaborate with talented individuals to create
            innovative solutions. I am excited about the endless possibilities
            that software engineering offers, and I am eager to continue growing
            as a developer. Thank you for taking the time to visit my portfolio.
            If you have any questions or would like to discuss a potential
            project, please don't hesitate to reach out.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>My core skills include:"</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img
            src={profileImage}
            alt="Profile-Image"
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
