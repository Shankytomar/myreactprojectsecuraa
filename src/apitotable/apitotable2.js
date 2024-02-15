import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
const AxiosCall = ()=>{

    const[apidata, setApiData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            await setApiData(res.data);
        };
        fetchData();
        }
        ,[]
        )
// defining columns
const column = [
    {dataField:'id', text:'Id'},
    {dataField:'name', text:'Name'},
    {dataField:'phone', text:'Phone'},
    {dataField:'website', text:'Website'}
]

return(

    <div>
        <BootstrapTable keyField='id' data={apidata} columns={column}/>
    </div>

)
}
export default AxiosCall;