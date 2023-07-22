import React, { useEffect, useState } from 'react'
import ProductoIndividual from '../components/ProductoIndividual'
import clienteAxios from '../components/axios/ClienteAxios'

import Header from '../components/Header'

function ListaProductos(){

    const[dataProductos, setDataProductos] = useState([])

    useEffect(() => {
        
        clienteAxios.get('api/producto/obtenerproductos')
        .then(res => {
            setDataProductos(res.data)
        })

    }, [])

    let listaProductos = dataProductos.sort((a, b) => a.codigo - b.codigo).map(producto => {
        return(
            <ProductoIndividual key={producto._id} producto={producto}></ProductoIndividual>
        )
    })


    return(
        <>
            <Header></Header>
            <div className='container cont-fondo'>
                <h3 className='pt-4 pb-4'>Lista de productos</h3>

                <div className='cards'>
                    {listaProductos.length !== 0 ? listaProductos : <p className='mt-3 mb-5'>No hay productos registrados</p>}
                </div>

            </div>
        </>
    )
}

export default ListaProductos