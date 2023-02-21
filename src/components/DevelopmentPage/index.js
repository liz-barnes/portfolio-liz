import { NavBar } from "../NavBar";
import {Footer} from "../Footer";

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
            <h1>Development Page</h1>
            <Footer />
        </div>
    )
}