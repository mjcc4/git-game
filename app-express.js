
const express = require('express')
const app = express()
const port = 3000

app.get('/welcome', (req, res) => {
  res.send('Bienvenue !')
});

app.use('/equipe', express.static('equipe'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})