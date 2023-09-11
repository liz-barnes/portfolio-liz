import { NavBar } from '../NavBar'
import './index.scss'
import lizHeadshot from '../../images/liz-headshot.png'
import { Footer } from '../Footer'
// import { Button } from "react-bootstrap"

export const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <div className="banner">
        <h1>Hi, I'm Liz</h1>
        <h2>Software Engineer & Designer</h2>
        <p>
        Passionate about UX/UI and dedicated to bridging the gap between product, design, and engineering.
        </p>
        {/* <div className="button-container">
          <Button>Download CV</Button>
          <Button>Reach Out</Button>
        </div> */}
      </div>
      <div className="skills">
        <div className="skills-card">
          <h5>Designer</h5>
          <p>
            My passion first fixated on design while making graphics for my
            sports team in 2018. I value collaborating with clients to
            understand the vision for their product and bringing it all to life.
          </p>
          <h6>What I design:</h6>
          <ul>
            <li>UX / UI</li>
            <li>Websites</li>
            <li>Graphics</li>
            <li>Logos</li>
            <li>Personalized Gifts</li>
            <li>Jersey Designs</li>
          </ul>
          <h6>Tools:</h6>
          <ul>
            <li>Figma</li>
            <li>Pen & Paper</li>
            <li>WHITEBOARD</li>
            <li>Font Awesome</li>
          </ul>
        </div>
        <div className="skills-card">
          <h5>Frontend Developer</h5>
          <p>
            I enjoy visualizing an idea and bringing it to fruition. Coding
            gives me the opportunity to express my creativity, while meeting a
            challenge every step of the way.
          </p>
          <h6>Languages/Frameworks:</h6>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>Typsescript</li>
          </ul>
          <h6>Tools:</h6>
          <ul>
            <li>Github</li>
            <li>JIRA</li>
            <li>VSCode</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>Bootstrap</li>
            <li>Font Awesome</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}
