import { Button } from 'react-bootstrap'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import projects from '../../helpers/data/designProjects'
import { Link } from 'react-router-dom'

export const DesignPage = () => {
  /* Storing user's device details in a variable*/
  let details = navigator.userAgent

  /* Creating a regular expression containing some mobile devices keywords to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i

  /* Using test() method to search regexp in details it returns boolean value*/
  let isMobileDevice = regexp.test(details)

  return (
    <>
      <NavBar />
      {/* <div>
        <h5 className='tbd'>Design work will be uploaded soon! {`:)`}</h5>
      </div> */}
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
                <div className="button-group">
                  <Link className="" to="/projectName" state={proj}>
                    <Button>
                      View Designs
                    </Button>
                  </Link>
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
