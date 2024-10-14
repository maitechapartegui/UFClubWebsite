const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('pages'))

app.get('/', (req, res) => {
  res.send('Here is the home page')
})

app.get('/calendar/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'files/calendar.png'))
})

app.get('/main/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/main.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
