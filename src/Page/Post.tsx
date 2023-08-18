import React,{useState, useEffect} from 'react'
import {Back, DataSet} from '../Api/index'
import {Mark, DataPart} from '../Component/Interface/index';
import Firebase from '../Component/Firebase';
// import { RootState } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';

import {setName} from '../reducers/counter'
import { RootState } from '../store';
function Post(){
    const [part, setpart] = useState([])
    // const { name } = useSelector((state: RootState) => state.counter);
    useEffect(() => {
      Back().then( res => {
        setpart( res.data.titles  )
        console.warn(res.data.titles)
    })
    },[])
    // console.warn('ss',name.someKey)
    const people: DataPart[] = part


    return (
        <div className='body'>
            {/* {people.map(item => (
                <div key={item.id} className="card" style={{ width: "18rem", height: "18rem", overflow: "hidden" }}>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{}</h6>
                    </div>
                </div>
            ))} */}
            {/* {part.map(item => (
                <div  className="card" style={{ width: "18rem", height: "18rem", overflow: "hidden" }}> */}
                    <img src={`${require('../Upload/1691738424611.png')}`} alt=""  />
                {/* </div>
            ))} */}
        </div>
    )
}

export default Post