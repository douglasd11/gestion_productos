const express = require('express')
const router = express.Router()

const multer = require('multer')
const sharp = require('sharp')

const path = require('path')
const fs = require('fs')

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaproducto = new eschema({
    codigo: String,
    categoria: String,
    nombre: String,
    precio: Number,
    descripcion: String,
    file: String
})

const ModeloProducto = mongoose.model('productos', eschemaproducto)

module.exports = router


// ----------------------------------------------------------------

const storage = multer.diskStorage({

    destination: path.join(__dirname, '../uploads/'),
    filename: (req, file, cb) => {
        if(file){
            const ext = file.originalname.split('.').pop()
            cb(null, `${Date.now()}.${ext}`)
        }
    }
})

const upload = multer({ storage })

// const helperImg = (filePath, filename, size = 900) => {
//     return sharp(filePath)
//         .resize(size)
//         .toFile(`./cliente/public/uploads/${filename}`)
// }


router.get('/obtenerproductos', async (req, res) => {

    const productos = await ModeloProducto.find()

    let dataProductos = []

    productos.map((producto) => {

        //console.log({...producto._doc, lol: "esto"})

        // producto._doc.dataImagen = fs.readFileSync(path.join(__dirname, '../uploads/' + producto.file ))
        dataProductos.push(producto)
    })

    res.send(dataProductos)
})


router.post('/agregarproducto', upload.single('file'), (req, res) => {

    //helperImg(req.file.path, `resize-${req.file.filename}`, 720)

    let fileFinal = ""
    
    if(req.file){
        fileFinal = req.file.filename
    }

    const nuevoproducto = new ModeloProducto({
        codigo: req.body.codigo,
        categoria: req.body.categoria,
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        file: fileFinal
    })
    
    nuevoproducto.save()

    res.send('Producto Agregado')
})


router.post('/borrarproducto', async (req, res) => {

    await ModeloProducto.findOneAndDelete({codigo: req.body.codigo})
    res.send('Producto Eliminado')
    
})


router.post('/editarproducto', async (req, res) => {
    //console.log(req.body, "linea 91")
    const producto = await ModeloProducto.findOne({ codigo: req.body.codigo })

    res.send(producto)

})

router.post('/actualizarproducto', upload.single('file'), async (req, res) => {

    let fileFinal = req.body.imagen
    
    if(req.file){
        fileFinal = req.file.filename
    }

    console.log(req.body)

    await ModeloProducto.findOneAndUpdate({ codigo: req.body.codigoAnterior },{
        
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        file: fileFinal
    })

    res.end('Producto actualizado')
    
})