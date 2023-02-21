import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a className="icon-link" href="/">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a className="icon-link" href="/">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
      </div>
      <p></p>
    </div>
  )
}
