const express = require('express');
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  console.log(req.query)
  res.send('ok')
})

app.get('/params', (req, res) => {
  console.log(req.query)
  res.send('ok params')
})

app.listen(PORT, () => {
  console.log('Started on port' + PORT)
})