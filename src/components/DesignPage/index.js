// import { Button } from 'react-bootstrap'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import projects from '../../helpers/data/designProjects';

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
                <p><strong>Who:</strong> {proj.company}</p>
                <p><strong>What:</strong> {proj.description}</p>
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
