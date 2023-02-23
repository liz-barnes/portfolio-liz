import { Button } from 'react-bootstrap'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'

const projects = [
  {
    title: `Nashville Nightshade`,
    type: 'Sports Graphics & Social Media Content',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.',
  },
  {
    title: `That Legendary Play`,
    type: 'Company Graphics & Logo Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.',
  },
  {
    title: `The Rodgers Group`,
    type: 'Logo Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.',
  },
]

export const DesignPage = () => {
  return (
    <>
      <NavBar />
      <div className="projects">
        {projects.map((proj) => (
          <div className="project-container">
            <div className="project-content">
              <h3>{proj.title}</h3>
              <h6>{proj.type}</h6>
              <div className="project-description">
                <p>{proj.description}</p>
                <div className="button-group">
                  {/* TODO: Uncomment when project page is ready */}
                  {/* <Button onClick={() => console.warn('info')}>
                    View Designs
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
