import React from 'react'
import clienteAxios from './axios/ClienteAxios'
import axios from 'axios'
import Swal from 'sweetalert2'


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

    return(
        <div className='card'>

            <div className='cont-img'>

                <button className='btn-eliminar' onClick={() => {borrarProducto(producto.codigo)}}>X</button>

                <p>{producto.codigo}</p>
                <img src={"uploads/"+producto.file}></img>
            </div>

            <div className='info'>
                <p className='categoria'>{producto.categoria}</p>
                <p className='nombre'>{producto.nombre}</p>
                <p className='precio'>$ {producto.precio}</p>
                <p className='descripcion'>{producto.descripcion}</p>

            </div>

        </div>
    )
}

export default ProductoIndividual