import { useLocation } from 'react-router-dom'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import './index.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const DesignProject = () => {
  const location = useLocation()
  const project = location.state
  return (
    <>
      <NavBar />
      <div className="design-project-page">
        <h1>{project.title}</h1>
        <h6>{project.type}</h6>
        <p>{project.role}</p>
        {project.projects?.map((proj) => (
          <div className="design-project">
            <h3>{proj.project}</h3>
            <div className="grid">
              {proj.designs.map((design) => (
                <div
                  className={`design-container w-${design.width} h-${design.height}`}
                >
                  <div className="design-item">
                    <div className={`image ${design.border ? 'border' : ''}`}>
                      <LazyLoadImage
                        src={design.image}
                        alt={''}
                        placeholderSrc={design.image}
                        effect="blur"
                      />
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
