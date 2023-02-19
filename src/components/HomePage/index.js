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

            </div>

        </div>
        <div className="skills">

        </div>
    </>
  )
}
