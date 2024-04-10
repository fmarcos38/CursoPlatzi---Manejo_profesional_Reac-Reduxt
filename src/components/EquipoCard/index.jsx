import React from 'react';
import './style.css';

function EquipoCard({id, nombre, imgEscudo, nombreEstadio, ubicacionEstadio}) {
    return (
        <div className='contCard'>
            <p>Club: {nombre}</p>
            {<img src={imgEscudo} alt='not'/> }
            <p>Estadio: {nombreEstadio}</p>
            <p>Ubicación estadio: {ubicacionEstadio}</p>
        </div>
    )
}

export default EquipoCard