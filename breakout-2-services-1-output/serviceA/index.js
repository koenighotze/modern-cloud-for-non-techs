const express = require('express')
const axios = require('axios').default
const app = express()
const port = process.env.PORT || 3000

app.get('/hello/:name', async (req, res) => {
  try {
    const response = await axios.get('https://service-b-dot-dev1-onb-playground-18fd.appspot.com/now', {
      timeout: 3000
    })

    res.send(`Hello ${req.params.name}. The date is ${response.data.date}`)
  }
  catch (e) {
    res.status(500).send({ error: `Cannot fetch current date time ${e.message}`})
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
