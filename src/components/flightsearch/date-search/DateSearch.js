
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class DateSearch extends Component {

    onChangeDate = (name,date) => {
        let returnDate,departureDate; 
        if(name === 'departureDate') {
            departureDate = moment(date._d);
            returnDate = this.props.returnDate;
        }  else {
            departureDate = this.props.departureDate;
            returnDate = moment(date._d);
        }
        this.props.getSelectedDates(departureDate,returnDate);
    }

    render() {
        return (
            <div>
                <div>
                    <label className="block">Departure date</label>
                    <DatePicker className="input" showMonthDropdown readOnly={true} selected={this.props.departureDate} onChange={(date) => this.onChangeDate('departureDate',date)}/>
                </div>     
                { this.props.isRoundTrip && 
                    <div>
                        <label className="block">Return date</label>            
                        <DatePicker className={this.props.error.isError && this.props.error.returnDate ? 'input error' : 'input'} showMonthDropdown readOnly={true} selected={this.props.returnDate} onChange={(date) => this.onChangeDate('returnDate',date) }/>
                    </div>
                }  
                
            </div>
        )
    }
}

export default DateSearch;