const express = require('express');
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  console.log(req.query)
})

app.listen(PORT, () => {
  console.log('Started on port' + PORT)
})