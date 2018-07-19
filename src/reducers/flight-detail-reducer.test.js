
import { GET_FLIGHT_DETAILS } from '../actions/action-types';
import { flightDetailsReducer } from './flight-detail-reducer';

describe('Flight Detail Reducer', () => {
    it('handles Actions of type GET_FLIGHT_DETAILS ', () => {

        const action = {
            type: GET_FLIGHT_DETAILS,
            payload: {}
        }

        const newState = flightDetailsReducer([],action);

        expect(newState).toEqual({flightDetails :{}});
    });
});
