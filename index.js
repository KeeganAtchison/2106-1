const express = require('express')
const app = express()
const port = 1501

app.get('/', (req, res) => {
  res.send({fistname:'keegan'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy:${port}`)
})
