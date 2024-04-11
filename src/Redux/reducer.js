import { GET_EQUIPOS } from "./actionType";

const initialState = {
    equipos: [],
};

export default function rootReducer(state = initialState, action){ //state = initialState -> cuando no hay estado actual entonces es initialState
    switch(action.type){
        case GET_EQUIPOS:
        return{
            ...state,
            equipos: action.payload
        }
        default:
            return state;
        
    }
};

