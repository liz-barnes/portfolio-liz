import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import projects from '../../helpers/data/designProjects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const DesignPage = () => {
  return (
    <>
      <NavBar />
      <div className="projects page">
        {projects.map((proj, i) => (
          <div
            className={'design-page-container'}
            key={i}
          >
              <div className="project-content">
                <h3>{proj.title}</h3>
                <h6>{proj.type}</h6>
              </div>
              <div className='project-button'>
                <Link className="" to={`/design/${proj.url}`} state={proj}>
                  <FontAwesomeIcon className='arrow-icon' icon={faAnglesRight} />
                </Link>
              </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
