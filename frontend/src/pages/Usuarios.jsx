import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Typography, Card, CardContent, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/usuarios')
      .then(response => setUsuarios(response.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleClick = (id) => {
    navigate(`/dados/${id}`)
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      {loading ? <CircularProgress /> : (
        usuarios.map(usuario => (
          <Card
            key={usuario.id}
            style={{ marginBottom: '1rem', cursor: 'pointer' }}
            onClick={() => handleClick(usuario.id)}
          >
            <CardContent>
              <Typography variant="h6">{usuario.nome}</Typography>
              <Typography>{usuario.email}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  )
}

export default Usuarios
