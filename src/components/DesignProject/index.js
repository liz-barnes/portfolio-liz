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
      <div className='design-project-page'>
      <h1>{project.title}</h1>
        {project.projects?.map((proj) => (
            <div className='design-project'>
                <h3>{proj.project}</h3>
                <div className='design-img'>
                    {proj.designs.map((design) => (
                        <>
                        {console.warn('img', design)}
                        <img src={design} alt={''}/>
                        </>
                    ))}
                </div>
            </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
