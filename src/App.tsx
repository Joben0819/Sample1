import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {Mark, DataPart} from './Interface/index';


function App() {

 const Carpool:  Mark = {
  card: 23,
  names: 'jv'
 }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
