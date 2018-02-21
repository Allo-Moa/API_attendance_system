const express = require('express')
const bodyParser = require('body-parser')

const store = require('./store')

const app = express()
app.use(express.static('./'))
app.use(bodyParser.json())
app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password,
      direct: req.body.direct,
      type: req.body.type
    })
    .then(() => res.sendStatus(200))
})

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})
