import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{Provider}from'react-redux'
import{createStore}from'redux'
import{createStore,applyMiddleware}from'redux' 
import thunk from 'redux-thunk'
import {BrowserRouter,Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Route component={App}/>
    </BrowserRouter>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
