import Server from "./models/server.js"

const server = new Server()

server.listen()














/* import express from 'express'
import dotenv from "dotenv/config.js"
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT, ()=>{
  console.log("Servidor corriendo en el puerto "+process.env.PORT);
})
 */