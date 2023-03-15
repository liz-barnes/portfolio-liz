import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import './index.scss'
import { Button } from 'react-bootstrap'
import projects from '../../helpers/data/developmentProjects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const DevelopmentPage = () => {
  /* Storing user's device details in a variable*/
  let details = navigator.userAgent

  /* Creating a regular expression containing some mobile devices keywords to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i

  /* Using test() method to search regexp in details it returns boolean value*/
  let isMobileDevice = regexp.test(details)

  return (
    <div>
      <NavBar />
      <div className="projects">
        {projects.map((proj, i) => (
          <div
            className={
              isMobileDevice ? 'mobile-project-container' : 'project-container'
            }
            key={i}
          >
            <div className="project-content">
              <h3>{proj.title}</h3>
              <h6>{proj.type}</h6>
              <div className="project-description">
                {proj.company?.length && (
                  <p>
                    <strong>Who: </strong>
                    {proj.company}
                  </p>
                )}
                <p>
                  {proj.company?.length && <strong>What: </strong>}
                  {proj.description}
                </p>
                {proj.tools?.length && (
                  <p className="tools-section">
                    <strong>Tools:</strong>
                    {proj.tools.map((p) => (
                      <FontAwesomeIcon className="tools-icon" icon={p} />
                    ))}
                  </p>
                )}
                <div className="button-group">
                  {proj.info && (
                    <Link
                      className=""
                      to={`/development/${proj.url}`}
                      state={proj}
                    >
                      <Button>More Info</Button>
                    </Link>
                  )}
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
