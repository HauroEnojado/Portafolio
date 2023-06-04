import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <>
      <h1>Hola, soy Victor Javier</h1>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default App
