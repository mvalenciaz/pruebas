import {Schema, model} from "mongoose"

//creamos el esquema que son los datos de como queremos que se vean o se registre en la base datos 

const InstructorSchema = Schema({
    nombre:{
        type:String,
        required:[true, "El nombre es obligatorio"]
    },
    tipoDocumento:{
        type:String,
        required:[true, "El tipo de documento es obligatorio"]
    },
    numeroDocumento:{
        type:String,
        required:[true,"el numero de documento es obligatorio"],
        unique:true,
    },
    correo:{
        type:String,
        required:[true, "El correo es obligatorio"],
        unique:true
    },
    telefono:{
        type:String,
        required:[true,"El telefono es obligatorio"]
    },
    estado:{
        type:Number,
        default:1
    },
    createdAt:{
        type:String, 
        default:Date.now()
    }
})


//el model pide dos parametros 
//1. primer parametro la forma en que seguarda la coleccion den la BD
//2. el segundo parametro el schema que acabamos de crear
export default model("Instructor", InstructorSchema)