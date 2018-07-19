
import { GET_CITY_DATA,GET_FLIGHT_SEARCH_DATA,PRICE_RANGE_FLIGHT_SEARCH } from '../actions/action-types';
import { citiesReducer,flightSearchReducer,priceRangeSearch } from './flight-search-reducer';

describe('Flight Search Reducer', () => {
    it('handles Actions of type GET_CITY_DATA', () => {

        const action = {
            type: GET_CITY_DATA,
            payload: {}
        }
        const newState = citiesReducer([],action);
        expect(newState).toEqual({citiesList :{}});
    });
    it('handles Actions of type GET_FLIGHT_SEARCH_DATA', () => {

        const action = {
            type: GET_FLIGHT_SEARCH_DATA,
            payload: {}
        }
        const newState = flightSearchReducer([],action);
        expect(newState).toEqual({});
    });

    it('handles Actions of type PRICE_RANGE_FLIGHT_SEARCH', () => {

        const action = {
            type: PRICE_RANGE_FLIGHT_SEARCH,
            payload: {}
        }
        const newState = priceRangeSearch([],action);
        expect(newState).toEqual({});
    });
});
