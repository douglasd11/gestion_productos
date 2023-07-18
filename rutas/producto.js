const express = require('express')
const router = express.Router()

const multer = require('multer')
const sharp = require('sharp')

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
    destination: (req, file, cb) => {
        cb(null, './cliente/public/uploads')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({ storage })

const helperImg = (filePath, filename, size = 900) => {
    return sharp(filePath)
        .resize(size)
        .toFile(`./cliente/public/uploads/${filename}`)
}


router.get('/obtenerproductos', async (req, res) => {

    const productos = await ModeloProducto.find()
    res.send(productos)
})


router.post('/agregarproducto', upload.single('file'), (req, res) => {

    //helperImg(req.file.path, `resize-${req.file.filename}`, 720)

    const nuevoproducto = new ModeloProducto({
        codigo: req.body.codigo,
        categoria: req.body.categoria,
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        file: req.file.filename
    })
    
    nuevoproducto.save()

    console.log("lol")
    res.send('Producto Agregado')

})


router.post('/borrarproducto', async (req, res) => {

    await ModeloProducto.findOneAndDelete({codigo: req.body.codigo})
    res.send('Producto Eliminado')
    
})