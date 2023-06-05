import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import NavBar from './components/NavBar'
import Proyects from './pages/Proyects'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <>
      <NavBar>
        <h1>Hola, soy Victor Javier</h1>
      </NavBar>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/proyects' element={<Proyects />} />
        <Route path='/contactme' element={<ContactMe />} />
      </Routes>
    </>
  )
}

export default App
