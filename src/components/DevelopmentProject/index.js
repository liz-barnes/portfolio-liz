import { useLocation } from 'react-router-dom'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DevelopmentProject = () => {
  const location = useLocation()
  const project = location.state

  return (
    <>
      <NavBar />
      <h3>{project.title}</h3>
      <h6>{project.type}</h6>
      <p>{project.company}</p>

      <h4>What I did:</h4>
      <ul>
        {project.work.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      {project.tools?.length && (
        <p className="tools-section">
          <strong>Tools:</strong>
          {project.tools.map((p) => (
            <FontAwesomeIcon className="tools-icon" icon={p} />
          ))}
        </p>
      )}
      <Footer />
    </>
  )
}
