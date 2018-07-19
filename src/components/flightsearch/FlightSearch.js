import React, { Component } from 'react';
import DateSearch from './date-search/DateSearch';
import SearchTab from './search-tab/SearchTab';
import CitySearch from './city-search/CitySearch';
import RangeSearch from './range-search/RangeSearch';
import Passenger from './passenger/Passenger';
import { connect } from 'react-redux';
import { getFlightSearchData,priceRangeSearch } from '../../actions/flight-search-action';
import moment from 'moment';
import './FlightSearch.css';

class FlightSearch extends Component {

  state = {
      originCity: '',
      destinationCity: '',
      price: {
        min: 0,
        max: 9900
      },
      isRoundTrip:true,
      departureDate: moment(),
      returnDate: moment(),
      passengerNumber: 'one',
      error : {
        isError:false,
        errorText : '',
        originCity: false,
        destinationCity:false,
        departureDate : '',
        returnDate: ''
      }
  }

  checkValidations = () => {
      this.setState({   
        error : {
          isError:false,
          errorText : '',
          originCity: false,
          destinationCity:false,
          departureDate : '',
          returnDate: false
        }
      });
  
      // To validate if Origin City is not empty
      if(this.state.originCity === '') {
        this.setState({error:{errorText: 'Please Enter Origin City',originCity:true,isError:true}});
        return false;
      } // To check if Destination city is not empty
      else if(this.state.destinationCity === '') {
        this.setState({error:{errorText: 'Please Enter Destination city',isError:true,destinationCity:true}});
        return false;
      } // To validate if Origin City and Destination City are not same
      else if(this.state.originCity === this.state.destinationCity) {
        this.setState({error:{errorText: 'The Origin and Destination city cannot be same.Please re-type.',isError:true,destinationCity:true}}); 
        return false;
      }
      
      // To validate if return date is greater than destination date
      if(this.state.isRoundTrip && this.state.departureDate > this.state.returnDate) {
        this.setState({error:{errorText: 'Return date should be greater than destination Date',isError:true,returnDate:true}});
        return false;
      } 
      return true;
  }

  // On Submitting form
  formSubmit = () => {
      if(this.checkValidations()) {
        this.props.getFlightSearchData({
            originCity: this.state.originCity,
            destinationCity: this.state.destinationCity,
            price: {
              min: this.state.price.min,
              max: this.state.price.max
            },
            isRoundTrip:this.state.isRoundTrip,
            departureDate: this.state.departureDate,
            returnDate: this.state.returnDate,
            passengerNumber: this.state.passengerNumber,
        });
      }
  }   
  // To get the cities selected by user
  getSelectedCities = (originCity,destinationCity) => {
      this.setState({originCity,destinationCity}, () => {
        if(this.state.originCity !== '' && this.state.destinationCity !== '') {
          this.checkValidations();
        }
      });
  }

  // To get the price selected by user
  getSelectedPrice = (price) => {
      this.setState({price},() => {
          this.props.priceRangeSearch(this.state.price);
      });
  }

  // To get number of passengers selected by user
  getSelectedPassengers = (passengerNumber) => {
      this.setState({passengerNumber});
  }
  
  // To get departure and return date
  getSelectedDates = (departureDate,returnDate) => {
      this.setState({departureDate,returnDate});
  }

  // To handle one way and return tab
  handleTab = (isRoundTrip) => {
     this.setState({isRoundTrip});
  }
 
  render() { 
    return (
        <div className="search">           
          <SearchTab handleTab = {this.handleTab} {...this.state}/>
          <form className="search-form">
              <CitySearch getSelectedCities = {this.getSelectedCities} {...this.state}/>
              <DateSearch getSelectedDates = {this.getSelectedDates} {...this.state} />  
              <Passenger getSelectedPassengers = {this.getSelectedPassengers} {...this.state}/>            
              <input type="button" className="search-form__submit" value="Search" onClick={this.formSubmit}/>    
              {this.state.error.isError && <span className="search-error">{this.state.error.errorText}</span> }
              <RangeSearch getSelectedPrice = {this.getSelectedPrice} {...this.state}/>           
          </form>      
        </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {       
      getFlightSearchData : (flightSearchData) => dispatch(getFlightSearchData(flightSearchData)),
      priceRangeSearch : (priceRange) => dispatch(priceRangeSearch(priceRange))
  };
};

export default connect(null,mapDispatchToProps)(FlightSearch);
