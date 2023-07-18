const express = require('express')
const app = express()
const cors = require('cors')

// const multer = require('multer')
// const sharp = require('sharp')

const archivoBD = require('./conexion')

app.use(cors({
    origin: "http://localhost:3000"
}))

// const helperImg = (filePath, filename, size = 900) => {
//     return sharp(filePath)
//         .resize(size)
//         .toFile(`./optimize/${filename}`)
// }

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads')
//     },
//     filename: (req, file, cb) => {
//         const ext = file.originalname.split('.').pop()
//         cb(null, `${Date.now()}.${ext}`)
//     }
// })

// const upload = multer({ storage })

app.use(express.json())

const rutaproducto = require('./rutas/producto')
app.use('/api/producto', rutaproducto)


app.get('/', (req, res) => {
    res.end('Bienvenidos al server perrooo')
})

// app.post('/upload', upload.single('file'), (req, res) => {
//     helperImg(req.file.path, `resize-${req.file.filename}`, 720)

//     res.send({data: 'imagen cargada', name: req.file.filename})
// })

// configurar server basico
app.listen(5000, function(){
    console.log('Servidor corriendo')
})