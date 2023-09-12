import {Schema, model} from "mongoose"

//creamos el esquema que son los datos de como queremos que se vean o se registre en la base datos 

const FichaSchema = Schema({
    numeroFicha:{
        type:String,
        required:[true, "El numero de la ficha es obligatorio"]
    },
    instructorLider:{
        type:String,
        required:[true, "El nombrel del Instructor es obligatorio"]
    },
    nombrePrograma:{
        type:String,
        required:[true,"el nombre del Programa es obligatorio"],
    },
    estado:{
        type:String,
        required:[true, "El estado es obligatorio"],
        default: true
    },
    createdAt:{
        type:String, 
        default:Date.now()
    }
})


//el model pide dos parametros 
//1. primer parametro la forma en que seguarda la coleccion den la BD
//2. el segundo parametro el schema que acabamos de crear
export default model("Ficha", FichaSchema)