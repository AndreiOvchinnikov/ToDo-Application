import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import App from './App';
 
const mockStore = configureStore();

const initialState = {
    todos: [],
}

it('renders without crashing', () => {
    const store = mockStore(initialState)
    shallow(<App store={store}/>);
});
