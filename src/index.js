import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './containers/App/App';
import initialState from './state/initialState';

const store = configureStore(initialState);

const Root = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
