import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'

function App() {
  return (
    <>
      <h1>Hola, soy Victor Javier</h1>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
