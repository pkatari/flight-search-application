
import React, { Component } from 'react';
import './SearchTab.css'

class SearchTab extends Component {

    handleTab = (tabName) => {
        const roundTrip = (tabName === "oneWay") ? false : true;
        this.props.handleTab(roundTrip);
    }
    render() {
        return (
            <div>
                <ul className="tabs">
                    <li className={"tab" + (this.props.isRoundTrip ? '' : ' active')} onClick={() => this.handleTab('oneWay')}>One way</li>
                    <li className={"tab" + (this.props.isRoundTrip ? ' active' : '')} onClick={() => this.handleTab('twoWay')}>Return</li>
                </ul>
            </div>
        )
    }
}

export default SearchTab;