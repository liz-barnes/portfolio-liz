import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import './index.scss'
import { Button } from 'react-bootstrap'
import projects from '../../helpers/data/developmentProjects'

export const DevelopmentPage = () => {
  return (
    <div>
      <NavBar />
      <div className="projects page">
        {projects.map((proj, i) => (
          <div
            className='project-container'
            key={i}
          >
            <div className="project-content">
              <h3>{proj.title}</h3>
              <h6>{proj.type}</h6>
              <div className="project-date">
                <p>{proj.dates}</p>
              </div>
              <div className="project-tech">
                {proj.tech?.length &&
                  proj.tech.map((t) => (
                    <Button className="tech-button">{t}</Button>
                  ))}
              </div>
              <div className="project-description">
                <ul>
                  {proj.role.length && proj.role.map((desc) => <li>{desc}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
