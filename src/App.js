import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import './App.css';
import Search from './components/Search';
import { useEffect } from 'react';
import { getEquipos } from './Redux/actions';
import { useDispatch } from 'react-redux';
import ListaEquipos from './components/ListaEquipos';
import Carousel from './components/Carousel';
import CheckVista from './components/CheckVista';

//apiFutbol
//https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Argentinian%20Copa%20de%20la%20Liga%20Profesional


function App() {
  
  //estado para el search
  const [search, setSearch] = useState(""); 
  //estado tipo de vista
  const [vista, setVista] = useState(false);

  const equipos = useSelector(state => state.equipos); 
  const dispatch = useDispatch();

  //funcion search
  const searchedEq = equipos.filter((eq) => {
    const eqNombre = eq.nombre.toLowerCase();
    const searchText = search.toLowerCase();
    return eqNombre.includes(searchText);
});

  const arrEqs = searchedEq ? searchedEq : equipos;


  useEffect(() => {
    dispatch(getEquipos());
  }, [dispatch]);

  return (
    <div className="App">
      <div className='container'>
        <h1>Equipos de la Liga Profesional Argentina 2024</h1>
        <CheckVista vista={vista} setVista={setVista} />
        {
          vista ? (
            <div className='contEquipos'>
              <Search search={search} setSearch={setSearch} />
              <ListaEquipos equipos={arrEqs} />
            </div>
          ) : (
            <Carousel equipos={arrEqs} />
          )
        }
      </div>
    </div>
  );
}

export default App;

