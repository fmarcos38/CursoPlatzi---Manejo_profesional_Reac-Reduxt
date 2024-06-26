import axios from "axios";
import { GET_EQUIPOS, TU_CLUB } from "./actionType";

const url = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Argentinian%20Copa%20de%20la%20Liga%20Profesional";


export function getEquipos(){     
    return async function(dispatch){
        const resp = await axios.get(url); 
        const equipos = resp.data.teams.map(e => e);//paso la resp q viene en un obj solo a array
        const newArrayEq = equipos.map(eq => {
            return {
                id: eq.idAPIfootball,
                nombre: eq.strTeam,
                nombreEstadio: eq.strStadium,
                ubicacionEstadio: eq.strStadiumLocation,
                imgEstadio: eq.strStadiumThumb,
                escudo: eq.strTeamBadge,
                fav: false
            }
        });        
        return dispatch({type: GET_EQUIPOS, payload: newArrayEq});
    }
};

export function favorito(idEq){
    return function (dispatch) {
        return dispatch({ type: TU_CLUB, payload: idEq });
    }
}
