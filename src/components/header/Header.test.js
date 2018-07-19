
import 'jest';
import * as React from 'react';
import Header from './Header';
import { configure,mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
const initialState = {};
const mockStore = configureStore();
let store = mockStore(initialState); 

describe('Header Component', () => {
    it('should render a label correctly', () => {
        const wrapper = mount(
            <Provider store= {store}>
                <Header />
            </Provider>
        );
        expect(wrapper.find('h1').text()).toEqual('Flight Search Engine');
    });
});