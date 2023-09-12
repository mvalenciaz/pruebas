import { Router } from "express"
import {fichasPost, fichasGet, FichasPut, getTowns, fichasChangeState  } from './../controllers/ficha.js'
import { check } from "express-validator"
import { validarCampos } from "../middlewares/validar-campos.js"
import { esCorreoValido, esDocumentoValido, existFichaId, existUsuarioporId, validarFicha } from "../helpers/validaciones-bd.js"


const router = Router()

router.get('/', fichasGet)

router.post('/',[
    check("numeroFicha", "La ficha es obligatoria").notEmpty(),
    check("instructorLider", "El nombre del instructor es obligatorio").notEmpty(),
    check("nombrePrograma", "El programa es obligatorio").notEmpty(),
    check("numeroFicha").custom(numeroFicha => validarFicha(numeroFicha)),
    validarCampos
], fichasPost)

router.put('/:id',[
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(id=>existFichaId(id)),
    check("numeroFicha", "La ficha es obligatoria").notEmpty(),
    check("instructorLider", "El nombre del instructor es obligatorio").notEmpty(),
    check("numbrePrograma", "El programa es obligatorio").notEmpty(),
    check("numeroFicha").custom(numeroFicha => validarFicha(numeroFicha)),
    validarCampos
],FichasPut)

router.put("/active/:id",[
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(id=>existFichaId(id)),
    validarCampos
],fichasChangeState)

router.post('/getTowns', getTowns)

export default router