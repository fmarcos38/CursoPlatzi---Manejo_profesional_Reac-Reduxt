import React, { useState } from 'react';
import './styles.css';

function Carousel({ equipos }) {
    //estado contador
    const [cont, setCont] = useState(0); 
    //onClick next
    const handleNext = () => {
        if(cont === equipos.length -1 ){ return null; }
        setCont(cont + 1)
    };
    //onClick prev
    const handlePrev = () => {
        if(cont === 0) { return null; }
        setCont(cont - 1);
    };
    //automatic

    return (
        <div class="contCarousel">            
            <div class="contInfo">
                <h2 className='nombre'>{equipos[cont]?.nombre}</h2>
                <img src={equipos[cont]?.escudo} class="escudo" alt="..." />
            </div>
            <div className='contBtns'>
                <button type="button" class="btn btn-primary" onClick={() => handlePrev()}>
                    <span class="textoBtn">Previous</span>
                </button>
                <button type="button" class="btn btn-primary" onClick={() => handleNext()}>
                    <span class="textoBtn">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel

/*

{
                
                
            }

*/

/*


                <div class="carousel-item" data-bs-interval="2000">
                    <h2>{equipos[1].nombre}</h2>
                    <img src={equipos[1]} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <h2>{equipos[2].nombre}</h2>
                    <img src={equipos[2]} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <h2>{equipos[3].nombre}</h2>
                    <img src={equipos[3]} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>

*/