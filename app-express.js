
const express = require('express')
const app = express()
const port = 3000
const panier1 = require('./panier/panier1.json')

app.get('/welcome', (req, res) => {
  res.send('Bienvenue !')
});

app.use('/equipe', express.static('equipe'));

app.get('/panier', (req, res) => {
  res.json(panier1);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})