import { NavBar } from "../NavBar"
import './index.scss'
import lizHeadshot from '../../images/liz-headshot.png'
import { Footer } from "../Footer"
import landscape from '../../images/landscape-vector.png';
// import { Button } from "react-bootstrap"

export const HomePage = () => {
  return (
    <div className="home-page">
        <NavBar/>
        <div className='banner'>
            <h1>Designer & Frontend Developer</h1>
            <p>I'm all about the visuals –– let's build something beautiful together</p>
            <div className="image-container">
                <img src={landscape} alt='landscape design'/>
            </div>
        </div>
        <div className="bio">
            <div className="headshot">
                <img className="image" src={lizHeadshot} alt='headshot of liz'/>
            </div>
            <div className="intro">
                <h3>Hello, I'm Liz</h3>
                <p>I grew up in Tennessee and now reside in central Oregon. I live for the outdoors and building up my communities. I am an athlete, avid adventurer, and a lifelong learner. My experience includes creating graphics, logos, UX / UI, wireframes and websites. I have written code remotely for tech companies, assisted a professional sports team with rebranding and content, and designed logos and graphics for startups.</p>
                {/* Uncomment with contact button */}
                {/* <div className="button-container">
                    <Button>Reach out!</Button>
                </div> */}
            </div>
        </div>
        <div className="skills">
            <div className="skills-card">
                <h5>Designer</h5>
                <p>My passion first fixated on design while making graphics for my sports team in 2018. I value collaborating with my clients to understand their product and vision and bringing that vision to life.</p>
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
                    <li>Fotn Awesome</li>
                </ul>
            </div>
            <div className="skills-card">
                <h5>Frontend Developer</h5>
                <p>I enjoy visualizing an idea and bringing it to fruition. Coding gives me the opportunity to express my creativity, while meeting a challenge every step of the way.</p>
                <h6>Languages:</h6>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS / SASS</li>
                    <li>Typsescript</li>
                    <li>Git</li>
                </ul>
                <h6>Tools:</h6>
                <ul>
                    <li>Github</li>
                    <li>JIRA</li>
                    <li>VSCode</li>
                    <li>Postman</li>
                    <li>Figma</li>
                    <li>Bootstrap</li>
                    <li>Stack Overflow</li>
                </ul>
            </div>

        </div>
        <Footer />
    </div>
  )
}
