import React,{useState, useEffect} from 'react'
import {Back, DataSet} from '../Api/index'
import {Mark, DataPart} from '../Interface/index';


function Post(){
    const [part, setpart] = useState([])

    useEffect(() => {
      Back().then( res => {setpart(res.data)})
    },[])

    const people: DataPart[] = part
    return (
        <div>
            {people.map((index) => {
            return (
                <>
                {index.title}...{index.id} <br/>
                </>
            )
            })}
        </div>
    )
}

export default Post