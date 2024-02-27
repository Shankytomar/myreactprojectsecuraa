import React from "react";
import { Button, Alert,Stack} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, {Search, CSVExport} from  'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import { useState } from "react";
import DeleteModalComponnet from "./DeleteModal";
import EditModalComponent from "./EditModal";
const TableMajor = ({result, setResultFun})=> {

    const [showDelete, setShowDelete] = useState(false);
    const setShowDeleteFun = (value)=>{
        setShowDelete(value)
    }
    const [showEdit, setShowEdit] = useState(false);
    const setShowEditFun = (value)=>{
        setShowEdit(value)
    }


    const [selectedRow, setSelectedRow] = useState();
    const setSeletedRowFun = (FieldName,value)=>{

            setSelectedRow( (prevRow)=>({...prevRow, [FieldName]:value}) );
    };

     //extacting search and csv
    const{ExportCSVButton} = CSVExport;
    const{SearchBar} = Search;
    var column =[
        {dataField: "index", text: "ID", headerStyle:{backgroundColor:"rgb(230,164,106)"}, style:{overflow:"hidden","text-overflow": "ellipsis"} },
        { dataField: "name", text: "Name",headerStyle:{backgroundColor:"rgb(191,133,72)",style:{overflow:"hidden","text-overflow": "ellipsis"} }},
        { dataField: "rotation_period", text: "Rotaion Period",headerStyle:{backgroundColor:"rgb(230,164,106)",style:{overflow:"hidden","text-overflow": "ellipsis"} }},
        { dataField: "orbital_period", text: "Orbital Period",headerStyle:{backgroundColor:"rgb(191,133,72)" },style:{overflow:"hidden","text-overflow": "ellipsis"}},
        { dataField: "diameter", text: "Diameter",headerStyle:{backgroundColor:"rgb(230,164,106)" },style:{overflow:"hidden","text-overflow": "ellipsis"}},
        { dataField: "climate", text: "Climate",headerStyle:{backgroundColor:"rgb(191,133,72)" },style:{overflow:"hidden","text-overflow": "ellipsis"} },
        { dataField: "gravity", text: "Gravity",headerStyle:{backgroundColor:"rgb(230,164,106)" },style:{overflow:"hidden","text-overflow": "ellipsis"} },
        { dataField: "terrain", text: "Terrain",headerStyle:{backgroundColor:"rgb(191,133,72)" },style:{overflow:"hidden","text-overflow": "ellipsis"} },
        { dataField: "surface_water", text: "Surface Water",headerStyle:{backgroundColor:"rgb(230,164,106)" },style:{overflow:"hidden","text-overflow": "ellipsis"},events:{onmouseenter:(e)=>{}}},
        { dataField: "population", text: "Population",headerStyle:{backgroundColor:"rgb(191,133,72)"}, style:{overflow:"hidden","text-overflow": "ellipsis"} },
        { dataField:"", text:"Actions",headerStyle:{backgroundColor:"rgb(230,164,106)" }, formatter:(cell,row)=>(
           < Stack direction="horizontal" style={{overflow:"hidden"}}>
                <Button variant="sm outline-warning " style={{color:"white" ,backgroundColor:"rgb(255,198,39)",marginRight:"1px"}} onClick={()=>{setSelectedRow(row);setShowEdit(true);}}>Edit</Button>
                <Button variant="sm outline-warning " style={{color:"white",backgroundColor:"rgb(255,89,0)"}} onClick={()=>{setSelectedRow(row);setShowDelete(true)}}>Delete</Button>
           </Stack>
         
        )}
    ]
        
    
    

    return(
        <ToolkitProvider
            keyField="name" 
            columns={column} 
            data={result}
            search={{
                defaultSearch:""    
            }
            
        } 
                
        >
            {
            props =>
                <div>
                 <hr></hr>
                 <Alert style={{backgroundColor:"rgb(255,190,152)", display:"flex"}}>
                    <SearchBar {...props.searchProps} style={{width:"80%"}}/>
                    <Button variant="success outline-warning ">
                        <ExportCSVButton {...props.csvProps} >Export CSV</ExportCSVButton>
                    </Button>
                </Alert> 
                 <div className="border border-success">
                <BootstrapTable  {...props.baseProps} hover striped />
                </div>
                <DeleteModalComponnet showDelete={showDelete} setShowDeleteFun={setShowDeleteFun} selectedRow={selectedRow} results={result} setResultsFun={setResultFun}/>
                <EditModalComponent showEdit={showEdit} setShowEditFun={setShowEditFun} selectedRow={selectedRow} setSelectedRowFun={setSeletedRowFun} results={result} setResultsFun={setResultFun}/>
                </div>
            }
        
        
        </ToolkitProvider>
        
    )
}
export default TableMajor;