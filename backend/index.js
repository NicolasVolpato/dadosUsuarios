import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

const usuarios = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com', idade: 28 },
  { id: 2, nome: 'Maria Souza', email: 'maria@email.com', idade: 34 },
  { id: 3, nome: 'Carlos Lima', email: 'carlos@email.com', idade: 41 }
];

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
