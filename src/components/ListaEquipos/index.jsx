import React from 'react'
import {  useSelector } from 'react-redux';
import './style.css'
import EquipoCard from '../EquipoCard'

function ListaEquipos() {

    const equipos = useSelector(state => state.equipos); 
    

    return (
        <div className='pokeList'>
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
                        />
                    )
                }) : (
                    <p>no eq</p>
                )
            }
        </div>
    )
}


export default ListaEquipos

