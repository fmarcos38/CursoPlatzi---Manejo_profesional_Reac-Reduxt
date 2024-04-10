import React from 'react'
import { useEffect } from 'react';
import { getEquipos } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import EquipoCard from '../EquipoCard'

function ListaEquipos() {

    const equipos = useSelector(state => state.equipos); console.log("eq:", equipos);  
    

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
                            imgEstadio={e.imgEstadio}
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

