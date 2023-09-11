import { NavBar } from '../NavBar'
import './index.scss'
import iconDesktop from '../../images/Icons/IconDesktop.png'
import iconUX from '../../images/Icons/IconUX.png'
import iconBridge from '../../images/Icons/IconBridge.png'
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
          Passionate about UX/UI and dedicated to bridging the gap between
          product, design, and engineering.
        </p>
        {/* <div className="button-container">
          <Button>Download CV</Button>
          <Button>Reach Out</Button>
        </div> */}
      </div>
      <div className="skills">
        <div className="skills-card">
          <span className="skills-card-header">
            <img className="icon" src={iconDesktop} alt="desktop icon" />
            <h5>Software Development</h5>
          </span>
          <p>
            Specializing in frontend development, I breathe life into designs
            with pixel-perfect precision. My expertise in React, JavaScript, and
            TypeScript ensures that user interfaces are not only functional but
            also responsive and visually engaging.
          </p>
        </div>
        <div className="skills-card">
          <span className="skills-card-header">
            <img className="icon" src={iconUX} alt="UX/UI icon" />
            <h5>UX/UI</h5>
          </span>
          <p>
            Passionate about crafting intuitive and visually appealing user
            experiences. From wireframing to implementation, I focus on creating
            interfaces that captivate and delight users, ensuring products are
            both functional and aesthetically pleasing.
          </p>
        </div>
        <div className="skills-card">
          <span className="skills-card-header">
            <img className="icon" src={iconBridge} alt="bridge icon" />

            <h5>Bridging the Gap</h5>
          </span>
          <p>
            As a bridge between product, design, and engineering, I thrive on
            facilitating seamless collaboration. My commitment to effective
            communication ensures that teams work harmoniously to transform
            visions into tangible, user-centric products.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
