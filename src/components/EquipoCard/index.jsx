import React from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { favorito } from '../../Redux/actions';

function EquipoCard({id, nombre, imgEscudo, nombreEstadio, ubicacionEstadio, fav}) {

    const dispatch = useDispatch();
    const handleFav = () => {
        dispatch(favorito(id));
    };

    return (
        <div className='contCard'>
            <p>Club: {nombre}</p>
            {<img src={imgEscudo} alt='not' className='imgEscudo'/> }
            <p>Estadio: {nombreEstadio}</p>
            <p>Ubicación estadio: {ubicacionEstadio}</p>
            <button 
                className={`btnFav ${fav ? 'favTrue' : ''}`}
                onClick={() => handleFav(id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg>
            </button>
        </div>
    )
}

export default EquipoCard



