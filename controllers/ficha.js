import Ficha from './../models/ficha.js'
import * as XLSX from "xlsx/xlsx.mjs"
import * as fs from "fs"

XLSX.set_fs(fs)

const fichasGet = async(req, res) => {
    const fichas = await Ficha.find()

    res.json({
      fichas
    })
}


const fichasPost = async function (req, res) {
    
    // la varibale body va a recibir todos los datos que envie el cliente
    const {numeroFicha, instructorLider, nombrePrograma} = req.body
    // console.log(body);
    //creamos una instancia del modelo y como parametro le enviamos todos los datos del body
    const ficha = new Ficha({numeroFicha, instructorLider, nombrePrograma})

    //para guardar el registro en la base de datos
    await ficha.save()

    res.json({
      ficha
    })
  }


  const FichasPut = async(req, res) =>{
    const { id } = req.params
    const {numeroFicha, instructorLider, nombrePrograma} = req.body

    const ficha = await Ficha.findByIdAndUpdate(id,{numeroFicha, instructorLider, nombrePrograma})

    res.json({
      ficha
    })
    
  }


  const fichasChangeState = async(req, res) =>{
    const {id} = req.params
    const fic = await Ficha.findById(id)
    let conduc=null
    if (fic.estado==true){
        conduc = await Instructor.findByIdAndUpdate(id,{estado:false})
    }else{
        conduc = await Instructor.findByIdAndUpdate(id,{estado:true})
    }
    res.json({
        conduc,
    })
  }


  const getTowns = async (req, res) => {
    let infoTowns;
    try {
      //../uploads/towns.xlsx
      console.log(req.files.file);
      const excelFile = XLSX.readFile(req.files.file.tempFilePath)
      const sheetName = excelFile.SheetNames;
      console.log(sheetName);
      //extraer la información de la hoja 1
      const sheet = excelFile.Sheets[sheetName[0]];
  
      //extraer desde la fila 2 hasta la 12
      infoTowns = XLSX.utils.sheet_to_json(sheet, {
        header: [, "departament", , "name"],
        range: 2,
        row: false,
        blankrows: false,
        defval: null,
        sheetStubs: true,
        cellDates: true
      }); 
  
      //eliminar los towns con el departamento de SANTANDER
      infoTowns = infoTowns.filter((item) => item.departament != "SANTANDER");
  
      //insertar todos los municipios en la base de datos
      /* Town.insertMany(infoTowns); */
  
      res.json({ msg: "Datos cargados correctamente", infoTowns });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Error al descargar el archivo" });
    }
  };





export { fichasPost, fichasGet, FichasPut, getTowns, fichasChangeState}