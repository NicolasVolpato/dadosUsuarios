import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Typography, Card, CardContent, CircularProgress } from '@mui/material'

function DetalhesUsuario() {
  const { id } = useParams()
  const [usuario, setUsuario] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:3001/usuarios/${id}`)
      .then(response => setUsuario(response.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <CircularProgress />
  if (!usuario) return <Typography variant="h6">Usuário não encontrado</Typography>

  return (
    <Container>
      <Card style={{ marginTop: '1rem' }}>
        <CardContent>
          <Typography variant="h5">{usuario.nome}</Typography>
          <Typography>Email: {usuario.email}</Typography>
          <Typography>Idade: {usuario.idade}</Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default DetalhesUsuario
