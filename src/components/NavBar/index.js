import { Link, NavLink } from 'react-router-dom'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="brand-container">
        <Link className="brand" to="/">
          Liz Marie
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <div className={menuOpen ? 'nav-active' : 'nav'}>
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
