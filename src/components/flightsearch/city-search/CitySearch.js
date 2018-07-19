
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCityDetails } from '../../../actions/flight-search-action';

export class CitySearch extends Component {
    
    onCityClick = () => {
        this.props.getCityDetails();
    }

    handleChange = (event) => {
        let originCity,destinationCity; 
        if(event.target.name === 'originCity') {
            originCity = event.target.value;
            destinationCity = this.props.destinationCity;
        }  else {
            originCity = this.props.originCity;
            destinationCity = event.target.value;
        }
        this.props.getSelectedCities(originCity,destinationCity);
    }

    render() {
        let cities;
        if(this.props.cities.citiesList !== undefined) {
            cities = this.props.cities.citiesList.map((cityName,index)=>{
                return <option key={index} value={cityName}/>    
            });
        }
        return (
            <div className="search-form__city">
                <div className="form-group">               
                    <input className={this.props.error.isError && this.props.error.originCity ? 'input error' : 'input'} type="text" placeholder="Enter Origin City" autoComplete="oneWay"
                       name="originCity" list="oneWay" onClick = { this.onCityClick } onChange= { this.handleChange }
                    />      
                    <datalist id="oneWay"> 
                        { cities }                     
                    </datalist> 
                </div>
                <div className="form-group">               
                    <input className={this.props.error.isError && this.props.error.destinationCity ? 'input error' : 'input'} type="text" placeholder="Enter Destination City" autoComplete="twoWay"
                       name="destinationCity" list="twoWay" onClick = { this.onCityClick } onChange= { this.handleChange }
                    />      
                    <datalist id="twoWay"> 
                        { cities }                     
                    </datalist> 
                </div>     
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {       
        getCityDetails : () => dispatch(getCityDetails())
    };
  };
  
const mapStateToProps = (state) => {
    return {
        cities: state.cities
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CitySearch);
