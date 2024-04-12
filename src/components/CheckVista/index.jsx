import React from 'react'
import './styles.css';

function CheckVista({ vista, setVista }) {
    return (
        <div class='contCheck'>
        <label class="lab1" >Vista modo Carousel</label>
        <div class="form-check form-switch divCheck">            
            <input class="form-check-input" type="checkbox" role="switch" onChange={() => setVista(!vista)}/>
        </div>
        <label class="form-check-label" >Vista modo Lista</label>
        </div>        
    )
}

export default CheckVista