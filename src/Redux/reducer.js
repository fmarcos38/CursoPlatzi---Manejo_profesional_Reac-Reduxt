import { GET_EQUIPOS, TU_CLUB } from "./actionType";

const initialState = {
    equipos: [],
    fav: false,
    tuClub: {},
};

export default function rootReducer(state = initialState, action){ //state = initialState -> cuando no hay estado actual entonces es initialState
    switch(action.type){
        case GET_EQUIPOS:
        return{
            ...state,
            equipos: action.payload
        }
        case TU_CLUB:
            console.log("idA: ", action.payload)
            const eqps = [...state.equipos];            
            const indexEq = eqps.findIndex(eq => eq.id === action.payload);//obt indice
            eqps[indexEq].fav = !eqps[indexEq].fav;

            return{
                ...state,
                equipos: eqps
            }
        default:
            return state;
        
    }
};

