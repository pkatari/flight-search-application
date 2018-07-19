
import { GET_FLIGHT_DETAILS } from './action-types.js';
import flightDetails from '../flightdata/flightdetail.json';

// To get Flight Details 
export const getFlightDetails = () => {  
    let flightInformation = [];
    flightDetails.map((element) => flightInformation.push(element));
    return {
        type: GET_FLIGHT_DETAILS,
        payload: flightInformation
    }         
};
