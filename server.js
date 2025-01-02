/*
  localhost:8080 should take users to index.html
  localhost:8080/about should take users to about.html
  localhost:8080/contact-me should take users to contact-me.html
  404.html should display any time the user tries to go to a page not listed above.
*/

import dotenv from 'dotenv'

import http from 'http'
import { createServer } from 'node:http'

dotenv.config()

const PORT = process.env.PORT

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Home</h1>')
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>About</h1>')
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>404: Not Found</h1>')
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// const serverTwo = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Hello World')
// })
