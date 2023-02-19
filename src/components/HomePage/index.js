import { NavBar } from "../NavBar"
import './index.scss'
import lizHeadshot from '../../images/liz-headshot.png'

export const HomePage = () => {
  return (
    <>
        <NavBar/>
        <div className='banner'>
            <h1>Designer & Frontend Developer</h1>
            <p>I'm all about the visuals –– let's build something beautiful together</p>
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

        </div>
    </>
  )
}
