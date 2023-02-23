import { Footer } from '../Footer'
import { NavBar } from '../NavBar'
import resume from '../../images/liz_barnes_resume.pdf'

export const Resume = () => {
  return (
    <>
      <NavBar />
      <div className="resume-page">
        <h3 className="outro">
          Thank you for visiting my site and checking out my work! Please reach
          out –– I would love to collaborate, talk code or anything in between.
        </h3>
        <div className="pdf-button-container">
          <a
            className="pdf-link"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Click here to view/download my resume!
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
