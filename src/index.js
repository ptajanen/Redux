import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './Store/Reducers/CounterReducer';
import resultsReducer from './Store/Reducers/Results';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})


const Store = createStore(rootReducer);

ReactDOM.render(<Provider store = { Store }>
<App />
</Provider>, document.getElementById('root'));
