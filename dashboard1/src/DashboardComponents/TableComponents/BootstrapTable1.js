import React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
const BootstrapTable1Component = ({result}) =>{

    console.log("component bootstrap receiving props=> ",result)

    return (
        
        <BootstrapTable data={result} striped hover condensed >
            <TableHeaderColumn  dataField="index" isKey={true} dataSort={true} width="75">index</TableHeaderColumn>
            <TableHeaderColumn  dataField="name"  dataSort={true} width="75">name</TableHeaderColumn>
            <TableHeaderColumn  dataField="rotation_period" dataSort={true} width="75">rotation_period</TableHeaderColumn>
            <TableHeaderColumn  dataField="orbital_period"  width="75">orbital_period</TableHeaderColumn>
            <TableHeaderColumn  dataField="diameter"  width="75">diameter</TableHeaderColumn>
            <TableHeaderColumn  dataField="climate" width="75" >climate</TableHeaderColumn>
            <TableHeaderColumn  dataField="gravity" width="75" >gravity</TableHeaderColumn>
            <TableHeaderColumn  dataField="terrain" width="75">terrain</TableHeaderColumn>
            <TableHeaderColumn  dataField="surface_water" width="75">surface_water</TableHeaderColumn>
            <TableHeaderColumn  dataField="population" width="75">population</TableHeaderColumn>

        </BootstrapTable>
    )
}

export default BootstrapTable1Component;