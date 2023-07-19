import React from 'react'
import clienteAxios from './axios/ClienteAxios'
import axios from 'axios'
import Swal from 'sweetalert2'

import { Link } from 'react-router-dom'


function ProductoIndividual({producto}){
    
    function borrarProducto(codigo){

        axios.post('api/producto/borrarProducto', {codigo})
        
        console.log(codigo, "eliminado linea")
        Swal.fire({
            title: 'Producto',
            text: 'Producto Eliminado',
            confirmButtonText: 'Ok'
        })
        .then(response => {
            window.location = '/listaProductos'
        })

    }

    console.log(producto.file, "linea 25")

    return(
        <div className='card'>

            <div className='cont-img'>

                <button className='btn-eliminar' onClick={() => {borrarProducto(producto.codigo)}}>X</button>

                <p>{producto.codigo}</p>

                <img src={ producto.file ? "uploads/"+producto.file : "uploads/imagen_por_defecto.jpg" }></img>

            </div>

            <div className='info'>
                <p className='categoria'>{producto.categoria}</p>
                <p className='nombre'>{producto.nombre}</p>
                <p className='precio'>$ {producto.precio}</p>
                <p className='descripcion'>{producto.descripcion}</p>
            </div>

            <div className='cont-edit'>
                <Link to={`/editarproducto/${producto.codigo}`}><li className='btn btn-success btn-editar'>Editar</li></Link>
            </div>

        </div>
    )
}

export default ProductoIndividual