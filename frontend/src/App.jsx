import { Routes, Route, Navigate } from 'react-router-dom'
import Usuarios from './pages/Usuarios'
import DetalhesUsuario from './pages/DetalhesUsuario'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/usuarios" />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/dados/:id" element={<DetalhesUsuario />} />
    </Routes>
  )
}

export default App
