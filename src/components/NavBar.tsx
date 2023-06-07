import { NavLink } from 'react-router-dom'

const NavBar = (): React.ReactElement => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/about'>Sobre mi</NavLink>
          </li>
          <li>
            <NavLink to='/proyects'>Proyectos</NavLink>
          </li>
          <li>
            <NavLink to='/blog'></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
