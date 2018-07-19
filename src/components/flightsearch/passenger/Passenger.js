
import React, { Component } from 'react';

class Passenger extends Component {

    render() {
        return (
            <div className="flight__passenger">           
               <label>
                Passengers
                    <select value={this.props.passengerNumber} onChange={event=> this.props.getSelectedPassengers(event.target.value)}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                        <option value="seven">7</option>
                        <option value="eight">8</option>
                        <option value="nine">9</option>
                    </select>
                </label>
            </div>
        )
    }
  }

  export default Passenger;