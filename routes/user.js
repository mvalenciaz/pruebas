import { Router } from "express"
import { UsuariosDelete, UsuariosGet, UsuariosPost, UsuariosPut } from "../controllers/users.js"

const router = Router()

router.get('/', UsuariosGet)

router.post('/:id/:cedula', UsuariosPost)

router.put('/', UsuariosPut)

router.delete('/', UsuariosDelete)

export default router