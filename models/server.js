import express from 'express'
import dotenv from "dotenv/config.js"
import cors from "cors"
import morgan from "morgan"
import fileUpload from 'express-fileupload'
import instructor from "../routes/instructor.js"
import { dbConnection } from '../database/config.js'
import ficha from './../routes/ficha.js'

class Server {

  constructor() {
    this.app = express()
    
    //middlewares
    this.middlewares()

    //conexion a base de datos
    this.conectar()

    //routes
    this.routes()
  }

  async conectar(){
    await dbConnection()
  }

  middlewares() {

    //cors
    this.app.use(cors())

    //configurar fileupload
    this.app.use(fileUpload({
      createParentPath: true,
      useTempFiles:true
    }))

    //lectura y parseo del body
    this.app.use(express.json())

    //me establece el middleware para usar el html
    this.app.use(express.static("public"))

    //morgan
    this.app.use(morgan("dev"))
    
  }

  routes(){

    this.app.use("/api/instructores", instructor)
    this.app.use("/api/fichas", ficha)
   
  }

  listen(){
    this.app.listen(process.env.PORT, ()=>{
        console.log("Servidor corriendo en el puerto "+process.env.PORT);
      })
  }

}

export default Server
