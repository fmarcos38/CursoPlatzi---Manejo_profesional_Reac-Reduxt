
import './App.css';
import Search from './components/Search';
import { useEffect } from 'react';
import { getEquipos } from './Redux/actions';
import { useDispatch } from 'react-redux';
import ListaEquipos from './components/ListaEquipos';

//apiFutbol
//https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Argentinian%20Copa%20de%20la%20Liga%20Profesional


function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEquipos());
  }, [dispatch]);

  return (
    <div className="App">
      <Search/>
      <ListaEquipos />
    </div>
  );
}

export default App;

