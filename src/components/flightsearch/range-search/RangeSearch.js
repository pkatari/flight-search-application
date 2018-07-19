
import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'; 
import './RangeSearch.css';

class RangeSearch extends Component {

    onPriceChange = (price) => {
        this.props.getSelectedPrice(price);
    }

    render() {       
        return (
            <div className="search-form__price-range">
                <div className="price-range__label">
                    <label>Refine Flight Search</label>
                </div>
                <InputRange maxValue={10000} minValue={0} formatLabel={price => `Rs ${price}`}
                    value={this.props.price}
                    onChange={price => this.onPriceChange(price)} />
            </div>
        )
    }
}

export default RangeSearch;