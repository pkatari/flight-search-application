import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFlightDetails } from '../../actions/flight-detail-action';
import moment from 'moment';
import FlightListDisplay from './flight-list-display/FlightListDisplay';
import './FlightDetail.css';

class FlightDetail extends Component {

    state = {
        isPriceSearch: false
    }

    componentDidMount() { 
        this.props.getFlightDetails();
    }   
   
    componentWillReceiveProps(nextProps) {
        if(nextProps.priceRangeSearch !== this.props.priceRangeSearch) {
           this.setState({isPriceSearch: true});
        } else {
           this.setState({isPriceSearch : false});
        }
    } 
    
    // To get Flights available based on search criterion
    checkFlightDetails = () => {
        if(this.props.flightList.flightDetails !== undefined) {
            return this.props.flightList.flightDetails.filter(flightData => {
                return this.checkIfFlightAvailable(flightData);            
            });    
        } 
    }
    
    // To Display available flight list
    getFlightList = (flightsFilter) => {
        return flightsFilter.map((flight) => {
            return <FlightListDisplay key={flight.id} flightData={flight} searchData={this.props.searchData}/>
        });
    }
    
    // To set the flight time in a format 'HH:MM AM' or 'HH:MM PM'
    setFlightTime = (flightData) => {
        let departureDate = new Date(flightData.departureDate),
            returnDate = new Date(flightData.returnTrip.departureDate),
            returnTripDepartureDate = new Date(flightData.returnTrip.departureDate),
            returnTripArrivalDate = new Date(flightData.returnTrip.arrivalDate);
            
        flightData.departureTime = moment(departureDate).format("hh:mm A");
        flightData.arrivalTime= moment(returnDate).format("hh:mm A");

        flightData.returnTrip.departureTime = moment(returnTripDepartureDate).format("hh:mm A");
        flightData.returnTrip.arrivalTime = moment(returnTripArrivalDate).format("hh:mm A");    
    }

    //  Compare flight detail with search data entered by user
    checkIfFlightAvailable = (flightData) => {

        const { searchData,priceRangeSearch } =  this.props;   
        let isRefinePriceSearch;   

        this.setFlightTime(flightData);

        let isReturnDate=true;
        let departureDate = new Date(flightData.departureDate),
            returnDate = new Date(flightData.returnTrip.departureDate);
            
        let isOriginCity = searchData.originCity ? ((flightData.originCity.toLowerCase() === searchData.originCity.toLowerCase()) ? true : false) : true;
        let isDestinationCity = searchData.destinationCity ? ((flightData.destinationCity.toLowerCase() === searchData.destinationCity.toLowerCase()) ? true : false) :true;
        let isDepartureDate = searchData.departureDate ? ((moment(departureDate).format("D M YYYY") === moment(searchData.departureDate).format("D M YYYY")) ? true : false) :true;
        
        if (searchData.returnDate && searchData.isRoundTrip) {
            isReturnDate = (moment(returnDate).format("D M YYYY") === moment(searchData.returnDate).format("D M YYYY")) ? true : false;
        }
        if(this.state.isPriceSearch) { 
             isRefinePriceSearch =(flightData.price <= priceRangeSearch.max && flightData.price >= priceRangeSearch.min) ? true : false;  
        } else {
            isRefinePriceSearch = searchData.price ? ((flightData.price <= searchData.price.max && flightData.price >= searchData.price.min) ? true : false) : true;      
        }

        return isOriginCity && isDestinationCity && isRefinePriceSearch && isDepartureDate && isReturnDate;
        
    }
    
    render() {
        let flightList;  
        const { searchData } = this.props;
 
        let flightsFilter = this.checkFlightDetails();
        if(flightsFilter !== undefined) {
           flightList = this.getFlightList(flightsFilter);
        }
       
        const departureDate =  moment(searchData.departureDate).format("Do MMM YYYY");
        const returnDate =  moment(searchData.returnDate).format("Do MMM YYYY");
        return (       
            <div className="flight-detail">
                { searchData.length === 0 &&
                   <h3 className="flight__all">Flights Available</h3>
                }
                { (flightList !== undefined && flightList.length <= 0) ?
                    <div className="no-flight">Sorry, There are no flights available. Please try again with different search!!!</div> :           
                    <div>
                        { searchData.length !== 0 &&
                            <div className="flight-detail__header">
                                { 
                                    searchData.isRoundTrip ?         
                                    <div className="flight-detail__trip">
                                        <div className="flight-detail__city">
                                            {searchData.originCity} > {searchData.destinationCity} > {searchData.originCity}
                                        </div>
                                        <div className="flight-detail__time">
                                            <div>Depart : {departureDate}</div>
                                            <div>Return : {returnDate}</div>
                                        </div>                                  
                                    </div> :
                                    <div className="flight-detail__trip">
                                        <div className="flight-detail__city">
                                            {searchData.originCity} > {searchData.destinationCity}
                                        </div>
                                        <div className="flight-detail__time">
                                            <div><b>Depart :</b> {departureDate}</div>
                                        </div>                                  
                                    </div>
                                }
                            </div>                    
                        }                   
                        { flightList }
                    </div>                      
                }
            </div>
        
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {       
        getFlightDetails : () => dispatch(getFlightDetails())
    };
  };
  
const mapStateToProps = (state) => {
    return {
        searchData: state.flightSearchData,
        flightList : state.flightDetailsData,
        priceRangeSearch : state.priceRangeSearch
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(FlightDetail);