/*
  localhost:8080 should take users to index.html
  localhost:8080/about should take users to about.html
  localhost:8080/contact-me should take users to contact-me.html
  404.html should display any time the user tries to go to a page not listed above.
*/

import http from 'http'
import { createServer } from 'node:http'

const PORT = 8080

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.statusCode = 404
  res.writeHead()
  res.end('<h1>Hello World</h1>')
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// const serverTwo = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Hello World')
// })
