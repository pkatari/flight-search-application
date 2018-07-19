
import { GET_FLIGHT_DETAILS } from '../actions/action-types';

export function flightDetailsReducer(state=[],action) {   
    switch(action.type) {
        case GET_FLIGHT_DETAILS:
           return Object.assign({}, state, { flightDetails: action.payload });         
        default:
           return state;
    }  
}
