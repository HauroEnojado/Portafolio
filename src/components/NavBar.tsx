import { NavLink } from 'react-router-dom'

const NavBar = ({ children }: React.PropsWithChildren) => {
  return (
    <header>
      {children}
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
          <li>
            <NavLink to='/contactme'>Contact Me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
