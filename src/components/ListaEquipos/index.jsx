import React from 'react'
import './style.css'
import EquipoCard from '../EquipoCard'
import NotFound from '../NotFound'

function ListaEquipos({equipos}) {


    return (
        <div className='contListaEq'>
            {
                equipos[0] ?
                equipos.map(e => {
                    return(
                        <EquipoCard 
                            key={e.id}
                            id={e.id} 
                            nombre={e.nombre} 
                            imgEscudo={e.escudo}
                            nombreEstadio={e.nombreEstadio}
                            ubicacionEstadio={e.ubicacionEstadio}
                            fav={e.fav}
                        />
                    )
                }) : (
                    <NotFound/>
                )
            }
        </div>
    )
}


export default ListaEquipos

