import { useLocation } from 'react-router-dom'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import './index.scss'

export const DesignProject = () => {
  const location = useLocation()
  const project = location.state
  return (
    <>
      <NavBar />
      <div className="design-project-page">
        <h1>{project.title}</h1>
        <div className="grid">
          {project.designs?.map((design) => (
            <div className="design-container">
              <div className="design-item">
                <div className="image">
                  <img src={design} alt={''} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {project.projects?.map((proj) => (
          <div className="design-project">
            <h3>{proj.project}</h3>
            <div className="grid">
              {proj.designs.map((design) => (
                <div
                  className={`design-container w-${design.width} h-${design.height}`}
                >
                  <div className="design-item">
                    <div className="image">
                      <img src={design.image} alt={''} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
