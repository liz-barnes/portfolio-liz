import { Link, NavLink } from 'react-router-dom'
import './index.scss';

export const NavBar = () => {
  return (
    <div className="navbar">
        <div className='brand-container'>

        <Link className='brand' to="/">Liz Marie</Link>
        </div>
      <div className='nav'>
        <NavLink exact="true" className={'navbar-item'} to="/development">Development</NavLink>
        <NavLink exact="true" className={'navbar-item'} to="/design">Design</NavLink>
      </div>
    </div>
  )
}
