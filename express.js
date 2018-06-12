const os = require('os')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>HELLO FROM EXPRESS</h1>')
})

const friendlyStart = (PORT, host) => {}

const PORT = 3000
app.listen(PORT, '127.0.0.1', () => {
  console.log(`listening on ${PORT}`)
  console.log(os.networkInterfaces())
})

