import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import projects from '../../helpers/data/designProjects'

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
      <div className="projects page">
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
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
