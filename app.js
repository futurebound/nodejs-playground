const path = require('node:path')

const express = require('express')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
]

const users = ['Rose', 'Cake', 'Biff']

app.get('/', (req, res) => {
  res.render('index', { links: links, users: users })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
