
import { combineReducers } from 'redux';
import { citiesReducer,flightSearchReducer,priceRangeSearch } from './flight-search-reducer';
import { flightDetailsReducer } from './flight-detail-reducer';

const rootReducer = combineReducers({
   cities: citiesReducer,
   flightSearchData : flightSearchReducer,
   flightDetailsData : flightDetailsReducer,
   priceRangeSearch :  priceRangeSearch
});

export default rootReducer

