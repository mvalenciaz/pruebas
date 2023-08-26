

const UsuariosGet = function (req, res) {
    res.json({
      msg:"get Api controlador"
    })
  }


const UsuariosPost = function (req, res) {
    const {id,cedula} = req.params
    res.json({
      id,
      cedula,
      msg:"post "
    })
  }

const UsuariosPut = function (req, res) {
    const data=req.query
    res.json({
      data,
      msg:"put "
    })
  }

const UsuariosDelete = function (req, res) {
    res.json({
      msg:"delete "
    })
  }

export {UsuariosGet, UsuariosPost, UsuariosDelete, UsuariosPut }