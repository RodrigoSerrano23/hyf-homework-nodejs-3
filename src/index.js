const express = require('express')
const app = express()
const port = 3000
const user = []

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.get('/users', (request, response) => {
    response.send(user)
  })

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})