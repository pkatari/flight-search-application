import React, { Component } from 'react';
import FlightSearch from './components/flightsearch/FlightSearch';
import FlightDetail from './components/flight-detail/FlightDetail';
import Header from './components/header/Header';
import './App.css';

class App extends Component {
  render() { 
    return (
        <div>
            <Header />
            <div className="flight-section">
                <FlightSearch />
                <FlightDetail />
            </div>
        </div>
    )
  }
}

export default App;
