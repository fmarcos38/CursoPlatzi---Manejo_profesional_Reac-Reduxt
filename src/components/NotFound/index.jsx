import React from 'react';
import './styles.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="soccer-ball"></div>
            <h2>No hay equipo/s</h2>
            <p>Lo sentimos, prueba otra busqueda.</p>
        </div>
    );
};

export default NotFound;