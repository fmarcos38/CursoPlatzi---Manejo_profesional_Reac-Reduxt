import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import './App.css';
import Search from './components/Search';
import { useEffect } from 'react';
import { getEquipos } from './Redux/actions';
import { useDispatch } from 'react-redux';
import ListaEquipos from './components/ListaEquipos';

//apiFutbol
//https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Argentinian%20Copa%20de%20la%20Liga%20Profesional


function App() {
  
  //estado para el search
  const [search, setSearch] = useState(""); 
  //estado para los equipo
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
      <h1>Equipos de la Liga Profesional Argentina 2024</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='contEquipos'>
        <ListaEquipos equipos={arrEqs}/>
      </div>
      
    </div>
  );
}

export default App;

