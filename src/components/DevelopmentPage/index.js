import { NavBar } from "../NavBar";
import {Footer} from "../Footer";
import './index.scss';

const projects = [
    {
        title: 'This Portfolio',
        type: 'website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.',
    },
    {
        title: `Nashville 'Shine`,
        type: 'website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.',
    }
]
export const DevelopmentPage = () => {
    return (
        <div>
            <NavBar />
            <div className="projects">
                {projects.map((proj) => (
                    <div className="project-container">
                        <h3>{proj.title}</h3>
                        <h6>{proj.type}</h6>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}