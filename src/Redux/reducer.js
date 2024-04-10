import { GET_EQUIPOS } from "./actionType";

const initialState = {
    equipos: [],
};

export default function rootReducer(state = initialState, action){
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

