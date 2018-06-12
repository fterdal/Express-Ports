const os = require('os')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>HELLO FROM EXPRESS</h1>')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
  console.log(os.networkInterfaces())
})

