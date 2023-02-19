import { NavBar } from "../NavBar"
import './index.scss'
import lizHeadshot from '../../images/liz-headshot.png'
import landscape from '../../images/landscape.png';

export const HomePage = () => {
  return (
    <>
        <NavBar/>
        <div className='banner'>
            <h1>Designer & Frontend Developer</h1>
            <p>I'm all about the visuals –– let's build something beautiful together</p>
            {/* <div className="image-container"> */}
                <img src={landscape} alt='landscape design'/>
            {/* </div> */}
        </div>
        <div className="bio">
            <div className="headshot">
                <img className="image" src={lizHeadshot} alt='headshot of liz'/>
            </div>
            <div className="intro">
                <h3>Hello, I'm Liz</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.</p>
            </div>

        </div>
        <div className="skills">
            <div className="skills-card">
                <h5>Designer</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. </p>
                <h6>What I design:</h6>
                <ul>
                    <li>Websites</li>
                    <li>Graphics</li>
                    <li>Logos</li>
                    <li>Personalized Gifts</li>
                    <li>Jersey Designs</li>
                </ul>
                <h6>Tools:</h6>
                <ul>
                    <li>Figma</li>
                </ul>
            </div>
            <div className="skills-card">
                <h5>Frontend Developer</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. </p>
                <h6>Languages:</h6>
                <ul>
                    <li>JS</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS / SASS</li>
                    <li>Typsescript</li>
                </ul>
                <h6>Tools:</h6>
                <ul>
                    <li>VSCode</li>
                    <li>Postman</li>
                    <li>Figma</li>
                </ul>
            </div>

        </div>
    </>
  )
}
