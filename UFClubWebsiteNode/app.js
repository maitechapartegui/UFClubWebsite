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

app.get('/calendar/current', (req, res) => {
  //Replace with actual data
  res.json({events: [{month: "October", day: "28", name: "Sprint 1 Presentation", description: "TODO"}, {month: "October", day: "29", name: "Sprint 1 Party", description: "Get crazy!"}]})
})

app.get('/main/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/main.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
