import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import './index.scss'
import { Button } from 'react-bootstrap'
import projects from '../../helpers/data/developmentProjects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                {proj.company?.length && <p><strong>Who: </strong>{proj.company}</p>}
                <p>{proj.company?.length && <strong>What: </strong>}{proj.description}</p>
                {proj.tools?.length && (
                  <p className="tools-section">
                    <strong>Tools:</strong>
                    {proj.tools.map((p) => (
                      <FontAwesomeIcon className="tools-icon" icon={p} />
                    ))}
                  </p>
                )}
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
