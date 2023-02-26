import { Link, NavLink } from 'react-router-dom'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

// TODO: Make responsive -- hamburger menu
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="brand-container">
        <Link className="brand" to="/">
          Liz Marie
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
      </div>
      <div className="nav">
        <NavLink exact="true" className={'navbar-item'} to="/development">
          Development
        </NavLink>
        <NavLink exact="true" className={'navbar-item'} to="/design">
          Design
        </NavLink>
        <NavLink exact="true" className={'navbar-item'} to="/resume">
          Resume
        </NavLink>
      </div>
    </div>
  )
}
