import Instructor from "../models/instructor.js"


const instructoresGet = async(req, res) => {
    const instructores = await Instructor.find()

    res.json({
      instructores
    })
}


const InstructoresPost = async function (req, res) {
    
    // la varibale body va a recibir todos los datos que envie el cliente
    const body = req.body

    //creamos una instancia del modelo y como parametro le enviamos todos los datos del body
    const instructor = new Instructor(body)

    //para guardar el registro en la base de datos
    await instructor.save()

    res.json({
      instructor
    })
  }




export { InstructoresPost, instructoresGet}