import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemText, Typography, Container } from "@mui/material";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      <List>
        {usuarios.map((u) => (
          <ListItem 
            button 
            key={u.id} 
            onClick={() => navigate(`/dados/${u.id}`)}
          >
            <ListItemText primary={u.nome} secondary={u.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
