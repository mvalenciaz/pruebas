import { Router } from "express"
import { InstructoresPost } from "../controllers/instructor.js"
import { check } from "express-validator"
import { validarCampos } from "../middlewares/validar-campos.js"
import { esCorreoValido, esDocumentoValido } from "../helpers/validaciones-bd.js"


const router = Router()

router.get('/', )

router.post('/',[
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("tipoDocumento", "El tipo de documento es obligatorio").notEmpty(),
    check("numeroDocumento", "El numero de documento es obligatorio").notEmpty(),
    check("numeroDocumento").custom(numeroDocumento => esDocumentoValido(numeroDocumento)),
    check("correo", "El correo es obligatorio").notEmpty(),
    check("correo", "El correo debe tener un formato valido").isEmail(),
    check("correo").custom(correo => esCorreoValido(correo)),
    check("telefono", "El telefono debe tener mas de 8 caracteres").isLength({min:6}),
    validarCampos
], InstructoresPost)

router.put('/',)

router.delete('/', )

export default router