const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let propriedades = [];
let clientes = [];
let transacoes = [];

// Propriedades
app.get('/propriedades', (req, res) => res.json(propriedades));
app.get('/propriedades/:id', (req, res) => {
  const propriedade = propriedades.find(p => p.id === parseInt(req.params.id));
  propriedade ? res.json(propriedade) : res.status(404).send('Propriedade não encontrada');
});
app.post('/propriedades', (req, res) => {
  const propriedade = req.body;
  propriedades.push(propriedade);
  res.status(201).json(propriedade);
});
app.put('/propriedades/:id', (req, res) => {
  const index = propriedades.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    propriedades[index] = req.body;
    res.json(propriedades[index]);
  } else {
    res.status(404).send('Propriedade não encontrada');
  }
});
app.delete('/propriedades/:id', (req, res) => {
  const index = propriedades.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    propriedades.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Propriedade não encontrada');
  }
});

// Clientes
app.get('/clientes', (req, res) => res.json(clientes));
app.get('/clientes/:id', (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  cliente ? res.json(cliente) : res.status(404).send('Cliente não encontrado');
});
app.post('/clientes', (req, res) => {
  const cliente = req.body;
  clientes.push(cliente);
  res.status(201).json(cliente);
});
app.put('/clientes/:id', (req, res) => {
  const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    clientes[index] = req.body;
    res.json(clientes[index]);
  } else {
    res.status(404).send('Cliente não encontrado');
  }
});
app.delete('/clientes/:id', (req, res) => {
  const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    clientes.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Cliente não encontrado');
  }
});

// Transações
app.get('/transacoes', (req, res) => res.json(transacoes));
app.get('/transacoes/:id', (req, res) => {
  const transacao = transacoes.find(t => t.id === parseInt(req.params.id));
  transacao ? res.json(transacao) : res.status(404).send('Transação não encontrada');
});
app.post('/transacoes', (req, res) => {
  const transacao = req.body;
  transacoes.push(transacao);
  res.status(201).json(transacao);
});
app.put('/transacoes/:id', (req, res) => {
  const index = transacoes.findIndex(t => t.id === parseInt(req.params.id));
  if (index !== -1) {
    transacoes[index] = req.body;
    res.json(transacoes[index]);
  } else {
    res.status(404).send('Transação não encontrada');
  }
});
app.delete('/transacoes/:id', (req, res) => {
  const index = transacoes.findIndex(t => t.id === parseInt(req.params.id));
  if (index !== -1) {
    transacoes.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Transação não encontrada');
  }
});

app.listen(3000, () => console.log('API rodando na porta 3000'));