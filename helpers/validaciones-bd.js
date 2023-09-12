
import Instructor from "../models/instructor.js";
import Ficha from './../models/ficha.js'

const esDocumentoValido = async(numeroDocumento)=>{
    const documento = await Instructor.findOne({numeroDocumento})
    if (documento){
        throw new Error(`El documento ${numeroDocumento} ya existe`)
    }
}

const validarFicha = async(numeroFicha)=>{
    const ficha = await Ficha.findOne({numeroFicha})
    if (ficha){
        throw new Error(`La FIcha ${numeroFicha} ya existe`)
    }
}

const esCorreoValido = async(correo, id)=>{
    const email = await Instructor.findOne({correo})
    console.log("busqueda "+email.id);
    console.log("trae "+id);
    if (email){
       if(email._id!=id){
        throw new Error(`El correo ${correo} ya existe`)
       }
    }
}

const existUsuarioporId = async (id) =>{
    const existeUsuario = await Instructor.findById(id)
    if(!existeUsuario){
            throw new Error(`El instructor no existe`)
    }
}

const existFichaId = async (id) =>{
    const existeFicha = await Ficha.findById(id)
    if(!existeFicha){
            throw new Error(`La ficha ${existeFicha.numeroFicha} no existe`)
    }
}

export {esDocumentoValido, esCorreoValido, existUsuarioporId, validarFicha, existFichaId }