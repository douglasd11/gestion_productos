import React from 'react'

import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Landing(){
    return(
        <>
            <div className='container cont-portada'>

                <div className='borde'>
                    <div className='cont-info'>
                        <h2>BIENVENIDOS AL GESTOR DE PRODUCTOS GAMING</h2>
                        <p>Bienvenido a nuestra pagina para gestionar lo ultimo en productos de tecnologia
                            y gaming, aqui encontraran una lista completa de productos categorizados y con
                            todos sus detalles, precio y descripcion</p>
                    </div>

                    <div className='cont-lista'>
                        <img src='portatilg.png'></img>
                        <Link to="/listaproductos"><li>Ingresar</li></Link>
                    </div>
                </div>
                

            </div>
        </>
       
    )
}

export default Landing