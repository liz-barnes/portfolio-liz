import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import projects from '../../helpers/data/designProjects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
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
      <div className="projects page">
        {projects.map((proj, i) => (
          <div
            className={'design-page-container'}
            key={i}
          >
            {!isMobileDevice ? (
              <>
                <div className="project-content">
                  <h3>{proj.title}</h3>
                  <h6>{proj.type}</h6>
                </div>
                <div className='project-button'>
                  <Link className="" to={`/design/${proj.url}`} state={proj}>
                    <FontAwesomeIcon className='arrow-icon' icon={faAnglesRight} />
                  </Link>
                </div>
              </>
            ): (
              <div className="project-content">
                <Link className="" to={`/design/${proj.url}`} state={proj}>
                  <h3>{proj.title}</h3>
                </Link>
                  <h6>{proj.type}</h6>
                </div>

            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
