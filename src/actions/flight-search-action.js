
import { GET_CITY_DATA,GET_FLIGHT_SEARCH_DATA,PRICE_RANGE_FLIGHT_SEARCH } from './action-types.js';
import cities from '../flightdata/cities.json';

// To get City data. 
export const getCityDetails = () => {  
    let citiesName = [];
    cities.map((element) => citiesName.push(element.name));
    return {
        type: GET_CITY_DATA,
        payload: citiesName
    }         
};

// To get Flight Search data
export const getFlightSearchData = (flightSearchData) => {  
    return {
        type: GET_FLIGHT_SEARCH_DATA,
        payload:flightSearchData
    }         
};

// To search Flights based on Price
export const priceRangeSearch = (priceRange) => {
    return {
        type: PRICE_RANGE_FLIGHT_SEARCH,
        payload: priceRange
    }
}
