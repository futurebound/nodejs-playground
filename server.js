/*
  localhost:8080 should take users to index.html
  localhost:8080/about should take users to about.html
  localhost:8080/contact-me should take users to contact-me.html
  404.html should display any time the user tries to go to a page not listed above.
*/

import dotenv from 'dotenv'
import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
import { createServer } from 'node:http'
import { resourceLimits } from 'node:worker_threads'

/* Initialize server */
dotenv.config() // MUST come before usage
const PORT = process.env.PORT

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(`filename: ${__filename}\n dirname: ${__dirname}`)

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      let filePath
      if (req.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html')
        // res.writeHead(200, { 'Content-Type': 'text/html' })
        // res.end('<h1>Home</h1>')
      } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html')
        // res.writeHead(200, { 'Content-Type': 'text/html' })
        // res.end('<h1>About</h1>')
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>404: Not Found</h1>')
      }

      const data = await fs.readFile(filePath)
      res.setHeader('Content-Type', 'text/html')
      res.write(data)
      res.end()
    } else {
      throw new Error('Method not allowed')
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Server Error')
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// const serverTwo = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Hello World')
// })
