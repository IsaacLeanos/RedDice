import React, { Component } from 'react';
import HomePage from './components/pages/HomePage'
import SignupPage from './components/pages/SignupPage'
import{Route}from'react-router-dom'

import NavigationBar from './components/navigation/NavigationBar'

const App=({location})=>{
    return (
    <div>
    <Route location={location} path='/' exact component={HomePage}/>
    <Route location={location} path='/signup' exact component={SignupPage}/>
    </div>
    )
  }

export default App;
