//arch ejemplo del index de la aplicacion, osea el index de la raiz

/*
    NO se usa
*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './indexRaiz';
import{pokemonsReducer}from './reducers/pokemons';
import{Provider}from 'react-redux';
import{applyMiddleware,compose,legacy_createStore as createStore,}from 'redux';
import{featuring,logger}from './middlewares';
import './index.css';

const root=ReactDOM.createRoot(document.getElementById('root'));
const composedEnhancers=compose(
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger,featuring) //aqui se declaran los middlewares desarrollados por nosotros
);
const store=createStore(pokemonsReducer,composedEnhancers);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);