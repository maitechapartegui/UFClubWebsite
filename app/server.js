const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
const path = require('path');
const app = express();
const port = 8080;
=======
const cors = require('cors')
const app = express();
>>>>>>> d2933cc60d37f27d973f9fd41faba5eb5f0ffc4b

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

<<<<<<< HEAD
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Here is the home page')
})

app.get('/calendar/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/calendar.png'))
})

app.get('/calendar/current', (req, res) => {
  //Replace with actual data
  res.json({events: [{month: "October", day: "28", name: "Sprint 1 Presentation", description: "TODO"}, {month: "October", day: "29", name: "Sprint 1 Party", description: "Get crazy!"}]})
})

app.get('/index/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.listen(port, () => console.log(`API is running on http://localhost:${port}`));
=======
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
>>>>>>> d2933cc60d37f27d973f9fd41faba5eb5f0ffc4b
