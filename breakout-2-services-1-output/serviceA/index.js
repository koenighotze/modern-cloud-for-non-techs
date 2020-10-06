const express = require('express')
const axios = require('axios').default
const app = express()
const port = 3000

app.get('/hello/:name', async (req, res) => {
  // this should point to service B
  const response = await axios.get('http://worldtimeapi.org/api/timezone/Europe/Berlin')

  res.send(`Hello ${req.params.name}. The date is ${response.data.datetime}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
