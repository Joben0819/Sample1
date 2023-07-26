import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Back, DataSet} from '../Api/index'
import {setName} from '../reducers/counter'
import { RootState } from '../store/index';

function Create() {

  const [id, setid] = useState('')
  const [title, settitle] = useState('')
  const [cont, setcont] = useState('') 
  const dispatch = useDispatch()
  const {name } = useSelector((state: RootState) => state.counter);
  const [named, setname] = useState('')

  function data(a: string, b: string , c: string ){
    window.location.reload();
    setname(a)
    var p = Number(c)
    DataSet(p, a, b)
  }

  return (
    <div>
      <h1>Create</h1>
      
      <input type="text" onChange={(e) => { settitle(e.target.value)}} />
      <input type="text" onChange={(e) => { setcont(e.target.value)}} />
      <input type="number" onChange={(e) => { setid(e.target.value)}} />

      <p
        onClick={() => {
          dispatch(setName(named))
          data(title, cont, id )
        }}
        >
          Edit <code>{name}</code> .
        </p>

    </div>
  )
}

export default Create