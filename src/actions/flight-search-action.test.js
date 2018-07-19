import { GET_CITY_DATA,GET_FLIGHT_SEARCH_DATA,PRICE_RANGE_FLIGHT_SEARCH } from './action-types.js';
import { getCityDetails,getFlightSearchData,priceRangeSearch } from './flight-search-action';
import cities from '../flightdata/cities.json';

describe('Flight Search Action Test', () => {
  it('action dispatched if cities list is retrieved successfully', () => {

    let citiesName = [];
    cities.map((element) => citiesName.push(element.name));

    const expectedAction = {
        type: GET_CITY_DATA,
        payload: citiesName
    }
    expect(getCityDetails(cities)).toEqual(expectedAction);
  });

  it('action dispatched if search button is clicked to retrieve search data', () => {

    const flightSearchData = {
        originCity: 'Pune',
        destinationCity: 'Delhi',
        departureDate: '08/02/2018',
        returnDate: '08/05/2018',
        passengerNumber: 'one'
    }
    const expectedAction = {
        type: GET_FLIGHT_SEARCH_DATA,
        payload: flightSearchData
    }
    expect(getFlightSearchData(flightSearchData)).toEqual(expectedAction);
  });
});

