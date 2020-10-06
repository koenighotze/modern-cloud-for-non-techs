const express = require('express')
const app = express()
const port = 3000

app.get('/now', (req, res) => {
  const date = new Date()
  res.send({ date })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
