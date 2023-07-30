import React,{useState, useEffect} from 'react'
import {Back, DataSet} from '../Api/index'
import {Mark, DataPart} from '../Component/Interface/index';


function Post(){
    const [part, setpart] = useState([])

    useEffect(() => {
      Back().then( res => {
        setpart(res.data)
        console.warn(res)
    })
    },[])

    const people: DataPart[] = part
    return (
        <div className='body'>
            {people.map((index) => {
            return (
                <>
                    <div className="card" style={{width: "18rem", height: "18rem"}}>
                        <img src={require(`../../Back-end/uploads/${index.image}`)} alt="samp"/>
                        <div className="card-body">
                            <h5 className="card-title">{index.title}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                        </div>
                    </div>
                {/* <br/> */}
                </>
            )
            })}
        </div>
    )
}

export default Post