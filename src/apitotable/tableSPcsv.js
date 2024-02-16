import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const MainApiComponent = ()=>{

    //need state
    const [apidata, setApiData] = useState([])
    //inital state is an empty array

    // useEffects
    useEffect(()=>{
        
        const fetchfun = async ()=>{
        const res = await axios.get("http://swapi.dev/api/planets/");
        const resData = res.data;
        setApiData(resData);
        }
        fetchfun();
    },[])
var arr =[apidata.results];
console.log(typeof arr)
    return(
        <div>
            {/* {JSON.stringify(apidata)}
            {apidata.count}
            {apidata.next}
            {apidata.previous} */}

            
        </div>
    )
}
export default MainApiComponent;