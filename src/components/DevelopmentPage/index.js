import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import './index.scss'
import { Button } from 'react-bootstrap'

const projects = [
  {
    title: 'This Portfolio',
    type: 'website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.',
    githubLink: 'https://github.com/liz-barnes/portfolio-liz',
    websiteLink: 'https://lizmarie-portfolio.netlify.app',
  },
  {
    title: `Nashville 'Shine`,
    type: 'website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tortor a malesuada feugiat. Pellentesque fermentum quis neque eget faucibus. Sed commodo euismod elit facilisis finibus. Curabitur sed accumsan felis. Donec sollicitudin mi non consectetur hendrerit. Aliquam erat volutpat. Etiam tortor leo, mattis sed tellus vitae, interdum vulputate orci.',
    githubLink: 'https://github.com/liz-barnes/nashville-shine-ultimate',
    websiteLink: 'https://nashvilleshineultimate.netlify.app/',
  },
]
export const DevelopmentPage = () => {
  return (
    <div>
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
                    More Info
                  </Button> */}
                  {proj.githubLink && (
                    <Button onClick={() => `${window.open(proj.githubLink)}`}>
                      Github Project
                    </Button>
                  )}
                  {proj.websiteLink && (
                    <Button onClick={() => `${window.open(proj.websiteLink)}`}>
                      Visit Site
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
