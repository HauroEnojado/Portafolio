import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/aboutme'>About Me</NavLink>
          </li>
          <li>
            <NavLink to='/proyects'>Proyects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
