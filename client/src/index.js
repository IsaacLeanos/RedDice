import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{Provider}from'react-redux'
import{createStore,applyMiddleware,compose}from'redux'
// import{composeWithDevTools}from'redux-devtools-extension' 
import thunk from 'redux-thunk'
import {BrowserRouter,Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './rootReducer'

const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Route component={App}/>
    </BrowserRouter>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
