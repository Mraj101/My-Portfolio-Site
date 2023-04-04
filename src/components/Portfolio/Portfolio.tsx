import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Projects</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Mraj101/react-todo-app" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://hasnains-todo-app.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>React TODO APP</h3>
              <p>A web application created as a personal project. This todo app allows users to create and manage their to-do lists. It was built using HTML, CSS, and JavaScript in react and showcases my skills in front-end development.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Mraj101/react-Contries-app" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://allcountries-information.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Countries</h3>
              <p>This app allows you to search for country information based on your input. You can view country flags, names, populations, and other relevant data to gain a better understanding of various countries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>javascript</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Mraj101/ReactMovieDb" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>React Movie Database</h3>
              <p>Your React web app with TMDB API lets users easily browse popular movies, vote on favorites, and view info like release dates and ratings. It's a user-friendly tool for discovering new and upcoming releases.
                <br />
                [under developement]
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>javascript</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://allcountries-information.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            
            </header>
            
            <div className="body">
              <h3>PortFolio</h3>
              <p>My React portfolio site is a clean and simple showcase of your work and skills. It features a bio, project list, and contact form for visitors. It effectively presents your capabilities and is easy to navigate.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>typescript</li>
                <li>css</li>
                <li>styled components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Mraj101/Django-SPORTS-MANAGER" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Sports Manager App</h3>
              <p>This is a web app based on python's DJANGO framework, where we can automate sporting system like , player registration, match fixtures, match results, and many more
                <br />
                [under developement]
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>javascript</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}