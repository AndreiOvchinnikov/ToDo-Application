import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './containers/App/App';
import initialAppState from './state/initialState';
import { autoPersistState, loadState } from './utils/persistState';
import './index.css';

const APP_ID = 'todo-application'

const initialState = loadState(APP_ID) || initialAppState

const store = configureStore(initialState);
autoPersistState(store, APP_ID)

const Root = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

