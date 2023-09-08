import { Router } from "express"
import { InstructoresChangeState, InstructoresPost, InstructoresPut, getTowns, instructoresGet } from "../controllers/instructor.js"
import { check } from "express-validator"
import { validarCampos } from "../middlewares/validar-campos.js"
import { esCorreoValido, esDocumentoValido, existUsuarioporId } from "../helpers/validaciones-bd.js"


const router = Router()

router.get('/', instructoresGet)

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

router.put('/:id',[
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(id=>existUsuarioporId(id)),
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("tipoDocumento", "El tipo de documento es obligatorio").notEmpty(),
    check("numeroDocumento", "El numero de documento es obligatorio").notEmpty(),
    check("correo", "El correo es obligatorio").notEmpty(),
    check("correo", "El correo debe tener un formato valido").isEmail(),
    check("correo").custom((correo, {req}) => esCorreoValido(correo, req.params.id)),
    check("telefono", "El telefono debe tener mas de 8 caracteres").isLength({min:6}),
    validarCampos
],InstructoresPut)

router.put("/active/:id",[
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(id=>existUsuarioporId(id)),
    validarCampos
],InstructoresChangeState)

router.post('/getTowns', getTowns)

export default router