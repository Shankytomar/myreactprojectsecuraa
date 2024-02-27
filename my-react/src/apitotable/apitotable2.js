import '../App.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
//import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit';
import ToolkitProvider, {Search, CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
//import ToolkitProvider, {CSVExport} from 'react-bootstrap-table2-toolkit';
const AxiosCall = ()=>{

    // extracting SearchBar from Search
    const {SearchBar} = Search;
    // extrating ExtractCSVButton from CSVExport
    const {ExportCSVButton} = CSVExport;
     // api data state
    const[apidata, setApiData] = useState([])
    // search not found
    const[found , setFound]=useState(false);
    //error state
    const [error, setError] = useState(false)

    useEffect(()=>{
        
        const fetchData = async()=>{
            try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            await setApiData(res.data);}
            catch(error){
                setError(true)
            }
        };
        fetchData();
        }
        ,[]
        )
// defining columns but array of objects
const column = [
    {dataField:'id', text:'Id' , sort:true },
    {dataField:'name', text:'Name' , sort:true},
    {dataField:'phone', text:'Phone' , sort:true},
    {dataField:'website', text:'Website' , sort:true},
    
]
//pagination task
//need to put config{object} inside paginationFactory({page:'defaultpageno.', sizePerPage:''}) and what it returns put in 
const pagination = paginationFactory(
    {
        page:1,
        sizePerPage:5,
        //showTotal:true //showing row out of total row
    }
    )

//no search found
const afterSearch = (Result)=>{
    console.log(Object.keys(Result).length>0)
    if(Object.keys(Result).length == 0){
        setFound(true)
        console.log("found"+found)
    }
    else{
        setFound(false)
        console.log('false hit')
    }

// if error is true
if(error){
    return <h1>something went wrong</h1>
}


}    
return(

    <div>
        <ToolkitProvider
            keyField='id'
            columns={column}
            data={apidata}
            //pagination props need to be passed on table not on tool kit
            //pagination={pagination}
            search={
                {defaultSearch:'',
                 afterSearch
               }
            }
            exportCSV={
            {
            fileName: 'custom.csv',
            }
            }
            >

            {
             (props)=> (
                <div>
            {/* <BootstrapTable keyField='id' data={apidata} columns={column} pagination={pagination} /> */}
            <ul className='searchNcsv'>
                <li className='searchBlock'>
                    <SearchBar { ...props.searchProps } style={{}}/>
                    </li>
                <li className='csvBlock'> 
                <ExportCSVButton {...props.csvProps} className='btn btn-primary'>Export CSV</ExportCSVButton>
                    </li>
            </ul>
                {/* CONDITIONAL RENDERING */}
                <di>{found && <p className='alert alert-warning'>NO SEARCH FOUND!!!!</p>}</di>

                <BootstrapTable { ...props.baseProps } pagination={pagination} hover/>
            </div> )
            }
            </ToolkitProvider>
    
    </div>

)
}
export default AxiosCall;