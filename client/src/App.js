import React, { Component } from 'react';
import Home from './components/Home'
import Signup from './components/Signup'
import{Route}from'react-router-dom'

import NavigationBar from './components/NavigationBar'

const App=({location})=>{
    return (
    <div>
    <Route location={location} path='/' exact component={Home}/>
    <Route location={location} path='/signup' exact component={Signup}/>
    </div>
    )
  }

export default App;
