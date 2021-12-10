const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const user = {
  name: 'Deez Nuts',
  email: 'deeznuts@gmail.com',
  username: 'IloveDeezNutsOnYourChin',
  phone: '123-456-7890',
  address: '777 Lucky Road Ave'
}
app.get('/user', (req, res) => {
  res.json(user)
})

app.listen(3000)
