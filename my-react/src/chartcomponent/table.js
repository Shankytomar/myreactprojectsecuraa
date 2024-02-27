import React from "react";

export const Table =(props)=>{

    const tabledata =[
        {name:"name1", age:23, place:"delhi"},
        {name:"name2", age:24, place:"delhi"},
        {name:"name3", age:25, place:"delhi"},
        {name:"name4", age:26, place:"delhi"},
    ];


return(
    <table>
        <thead></thead>
        <tbody>
            {tabledata.map((data)=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.place}</td>
                </tr>
            )}
        </tbody>
    </table>
);
}
export default Table;