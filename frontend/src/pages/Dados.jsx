import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container, Card, CardContent } from "@mui/material";

export default function Dados() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/usuarios/${id}`)
      .then(res => res.json())
      .then(data => setUsuario(data));
  }, [id]);

  if (!usuario) return <Typography>Carregando...</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Detalhes do Usuário</Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">{usuario.nome}</Typography>
          <Typography>Email: {usuario.email}</Typography>
          <Typography>Idade: {usuario.idade}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
