import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

export const AxiosApi = ()=>{
//state1  const [apidata, setApiData] = useState('data');
const[apidata, setApiData] = useState([])
// without async and await data is not showing
useEffect(()=>{
const callApi = async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setApiData(res.data);
};
callApi();}
,[]
)
// console.log(apidata)
// console.log(typeof apidata)
//const x = JSON.stringify(apidata,null,2);
// console.log(typeof x)
return(
    <div>
        {/* <div>{JSON.stringify(apidata)}</div> */}
        <table>
            <tbody>
                {apidata.map((user,index)=>{
                    return   <tr key={index}>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.phone}</td>
                                  <td>{user.website}</td>
                                  
                            </tr>
                }
               
                )}
            </tbody>
        </table>
    </div>
);
}
export default AxiosApi;






//Iterable Problem
// const callApi =()=>{
//     axios.get( "https://swapi.dev/api/people/1" )
//           .then(  (response)=> {
//                                 const res = response.data;
//                                 setApiData(res);
//                                 }
//             )
// }

//using async await


//inside return
//<div>
  //     {/* <button type='button' onClick={callApi()}></button> */}
    //   {/* <div>axios component {JSON.stringify(apidata, null, 2)}</div> */}
      // <div>{x}</div>
       //<div>{apidata.name}</div>
      // <div>{apidata.height}</div>
      // <div>{apidata.mass}</div>

      // <table>
       // <tbody>
          //  <tr>
            //    <td>name: {apidata.name}</td>
              //  <td>height: {apidata.height}</td>
                //<td>mass: {apidata.mass}</td>
            //</tr>
        //</tbody>
    //</table>
    //<p>fsaf</p>

    //</div>