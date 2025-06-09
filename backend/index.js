import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

const usuarios = [
  {
    id: 1,
    nome: "Lucas Ferreira",
    email: "lucas.ferreira@example.com",
    idade: 28,
    telefone: "(41) 91234-5678",
    dataCadastro: "2024-03-15"
  },
  {
    id: 2,
    nome: "Mariana Santos",
    email: "mariana.santos@example.com",
    idade: 34,
    telefone: "(11) 98765-4321",
    dataCadastro: "2023-07-29"
  },
  {
    id: 3,
    nome: "Rafael Almeida",
    email: "rafael.almeida@example.com",
    idade: 25,
    telefone: "(21) 99876-5432",
    dataCadastro: "2025-01-10"
  },
  {
    id: 4,
    nome: "Fernanda Costa",
    email: "fernanda.costa@example.com",
    idade: 31,
    telefone: "(51) 93456-7890",
    dataCadastro: "2024-11-05"
  },
  {
    id: 5,
    nome: "Pedro Oliveira",
    email: "pedro.oliveira@example.com",
    idade: 29,
    telefone: "(31) 97654-3210",
    dataCadastro: "2023-12-20"
  }
]

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
