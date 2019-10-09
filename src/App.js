import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/Home';
import SHOP from './Pages/Shop/ShopPage'
import {Route } from 'react-router-dom'



function App(props) {
  return (
    <div>
      
       <Route exact path = '/' component = {HomePage}/>
       
    </div>
  );
}

export default App;
