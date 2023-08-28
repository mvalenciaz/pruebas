
import Instructor from "../models/instructor.js";

const esDocumentoValido = async(numeroDocumento)=>{
    const documento = await Instructor.findOne({numeroDocumento})
    if (documento){
        throw new Error(`El documento ${numeroDocumento} ya existe`)
    }
}

const esCorreoValido = async(correo)=>{
    const email = await Instructor.findOne({correo})
    if (email){
        throw new Error(`El correo ${correo} ya existe`)
    }
}

export {esDocumentoValido, esCorreoValido}