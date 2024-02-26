import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const MainApiComponent = ()=>{

    //need state
    const [apidata, setApiData] = useState([])
    //inital state is an empty array

    const [error, setError] = useState()

    // useEffects
    useEffect(()=>{
        
        
        const fetchfun = async ()=>{
            try{
        const res = await axios.get("http://swapi.dev/api/planets/");
        const resData = res.data;
        setApiData(resData);
            }
            catch(error){
               setError(error) 
            }
        }
        fetchfun();
    },[])

    return(
        <div>
         
            {/* {JSON.stringify(apidata)}
            {apidata.count}
            {apidata.next}
            {apidata.previous}
            <h1>=============================</h1> */}
            {
            [apidata].map((ele)=>{
                return(
                    
                ele.results.map((ele2)=>{
                                        return (<p>{ele2.name}</p>)
                                            
                                     })
                )
            })
           }
        </div>
    )
}
export default MainApiComponent;