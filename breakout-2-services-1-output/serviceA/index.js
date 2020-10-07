const express = require('express')
const axios = require('axios').default
const app = express()
const port = process.env.PORT || 3000
const serviceBUrl = process.env.SERVICE_B_URL

app.get('/hello/:name', async (req, res) => {
  try {
    const response = await axios.get(`${serviceBUrl}/now`, { timeout: 3000 })

    res.send(`Hello ${req.params.name}. The date is ${response.data.date}. Full response ${JSON.stringify(response.data)}`)
  }
  catch (e) {
    res.status(500).send(e.message)
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
