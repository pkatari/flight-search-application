
import { GET_CITY_DATA,GET_FLIGHT_SEARCH_DATA,PRICE_RANGE_FLIGHT_SEARCH } from '../actions/action-types';

export function citiesReducer(state=[],action) {   
    switch(action.type) {
        case GET_CITY_DATA:
           return Object.assign({}, state, { citiesList: action.payload });         
        default:
           return state;
    }  
}

export function flightSearchReducer(state=[],action) {   
    switch(action.type) {
        case GET_FLIGHT_SEARCH_DATA:
           return Object.assign({}, state,action.payload );         
        default:
           return state;
    }  
}

export function priceRangeSearch(state=[],action) {
    switch(action.type){
        case PRICE_RANGE_FLIGHT_SEARCH:
           return Object.assign({}, state,action.payload );         
        default:
        return state
    }
}
