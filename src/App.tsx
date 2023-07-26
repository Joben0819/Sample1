import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/index';
import {Mark, DataPart} from './Interface/index';
// import {setName} from './reducers/counter'
import {Back, DataSet} from './Api/index'

function App() {
  const [part, setpart] = useState([])

  useEffect(() => {
    Back().then( res => {setpart(res.data)})
  },[])

 const Carpool:  Mark = {
  card: 23,
  names: 'jv'
 }

  // console.warn(part)
  const people: DataPart[] = part
  console.warn(part)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {people.map((index) => {
          return (
            <>
            {index.title}...{index.id} <br/>
            </>
          )
        })}
      </header>
    </div>
  );
}

export default App;
