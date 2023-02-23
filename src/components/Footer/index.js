import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a className="icon-link" href="https://github.com/liz-barnes" target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a className="icon-link" href="https://www.linkedin.com/in/lizmbarnes/" target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a className="icon-link" href="mailto:embarnes95@gmail.com">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
      </div>
      <p className='copyright'>© 2023 Liz Marie</p>
    </div>
  )
}
