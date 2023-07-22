import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import { Link } from 'react-router-dom'
import clienteAxios from './axios/ClienteAxios'


function ProductoIndividual({producto}){

    
    function borrarProducto(codigo){

        clienteAxios.post('api/producto/borrarProducto', {codigo})
        
        console.log(codigo, "eliminado linea")
        Swal.fire({
            title: 'Producto',
            text: 'Producto Eliminado',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#F66A0D'
        })
        .then(response => {
            navigate('/listaproductos')
        })

    }

    // function imageExists(url, callback) {
    //     const img = new Image();
    //     img.onload = function() {
    //       callback(true);
    //     };
    //     img.onerror = function() {
    //       callback(false);
    //     };
    //     img.src = url;
    // }

    // if(producto.file){
    //     console.log("entra1")
    //     let imageUrl = "http://localhost:5000/"+producto.file
    
    //     imageExists(imageUrl, function(exists) {
    //         console.log("entra2", exists)
    //         if (!exists) {
    //             producto.file = "imagen_por_defecto.jpg"
    //         } 
    //     });
    // }
    

    console.log(producto.file, "linea 25")

    return(
        <div className='card'>

            <div className='cont-img'>

                <button className='btn-eliminar' onClick={() => {borrarProducto(producto.codigo)}}>X</button>

                <p>{producto.codigo}</p>

                <img src={ producto.file ? "https://api-productos-9hbc.onrender.com/"+ producto.file : "https://api-productos-9hbc.onrender.com/imagen_por_defecto.jpg" }></img>

            </div>

            <div className='info'>
                <p className='categoria'>{producto.categoria}</p>
                <p className='nombre'>{producto.nombre}</p>
                <p className='precio'>$ {new Intl.NumberFormat().format(producto.precio)}</p>
                <p className='descripcion'>{producto.descripcion}</p>
            </div>

            <div className='cont-edit'>
                <Link to={`/editarproducto/${producto.codigo}`}><li className='btn-editar'>Editar</li></Link>
            </div>

        </div>
    )
}

export default ProductoIndividual