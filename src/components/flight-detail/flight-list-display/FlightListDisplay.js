import React, { Component } from 'react';
import './FlightListDisplay.css';

class FlightListDisplay extends Component {

    render() {
        const { flightData,searchData } = this.props;

        return (
            <div className={searchData === undefined || !searchData.isRoundTrip ? 'flight-list flight-list_oneway' : 'flight-list'}>
                <div className="flight-list__details">
                    <h3 className="flight__price">Rs {flightData.price}</h3>
       
                    <div className="flight__data">
                        <div className="flight__origin">
                            <p className="flight__number">{flightData.airlineNumber}</p>
                            <p>{flightData.destinationCityCode} > {flightData.originCityCode}</p>
                            <p><b>Depart:</b> {flightData.departureTime}</p>
                            <p><b>Arrive: </b>{flightData.arrivalTime}</p>
                        </div>
                        
                        { 
                        searchData.isRoundTrip &&
                        <div className="flight__return">
                            <p className="flight__number">{flightData.returnTrip.airlineNumber}</p>
                            <p>{flightData.returnTrip.destinationCityCode} > {flightData.returnTrip.destinationCityCode}</p>
                            <p><b>Depart:</b> {flightData.returnTrip.departureTime}</p>
                            <p><b>Arrive:</b> {flightData.returnTrip.arrivalTime}</p>
                        </div>
                        }
                    </div>
                </div>             
                <div className="flight__book">
                    <div className="flight__image"></div>
                    <button className="flight__book-button">
                       Book This Flight
                    </button>
                </div>
            </div>
        )    
    }
 }

export default FlightListDisplay;