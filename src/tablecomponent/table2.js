import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export const Table2 = ()=>{

    //create some data
    const tabledata=
        [
            {
              "id": 1,
              "first_name": "Christophorus",
              "last_name": "Mc Caghan",
              "email": "cmccaghan0@github.io",
              "gender": "Male",
              "ip_address": "142.45.32.192"
            },
            {
              "id": 2,
              "first_name": "Moyra",
              "last_name": "Chatt",
              "email": "mchatt1@gravatar.com",
              "gender": "Female",
              "ip_address": "141.217.104.44"
            },
            {
              "id": 3,
              "first_name": "Godfry",
              "last_name": "Fatkin",
              "email": "gfatkin2@yahoo.com",
              "gender": "Male",
              "ip_address": "86.192.211.27"
            },
            {
              "id": 4,
              "first_name": "Rasla",
              "last_name": "Hurst",
              "email": "rhurst3@themeforest.net",
              "gender": "Female",
              "ip_address": "69.71.85.86"
            },
            {
              "id": 5,
              "first_name": "Rosana",
              "last_name": "Beames",
              "email": "rbeames4@utexas.edu",
              "gender": "Female",
              "ip_address": "47.142.69.188"
            },
            {
              "id": 6,
              "first_name": "Mommy",
              "last_name": "Dayne",
              "email": "mdayne5@cmu.edu",
              "gender": "Genderfluid",
              "ip_address": "8.255.156.237"
            },
            {
              "id": 7,
              "first_name": "Valentine",
              "last_name": "Carty",
              "email": "vcarty6@comcast.net",
              "gender": "Female",
              "ip_address": "71.227.97.142"
            },
            {
              "id": 8,
              "first_name": "Margy",
              "last_name": "Archanbault",
              "email": "marchanbault7@google.ca",
              "gender": "Agender",
              "ip_address": "221.241.164.158"
            },
            {
              "id": 9,
              "first_name": "Deeann",
              "last_name": "Atcock",
              "email": "datcock8@harvard.edu",
              "gender": "Non-binary",
              "ip_address": "140.204.168.135"
            },
            {
              "id": 10,
              "first_name": "Minor",
              "last_name": "Hegarty",
              "email": "mhegarty9@4shared.com",
              "gender": "Male",
              "ip_address": "39.43.162.152"
            }
        
    ]
    const column = [
        //data key
        {dataField:'id',
        //column custom name
         text:"ID"},
        
         {dataField:'first_name' ,
        text:'Name',
        sort:true},
        
        {dataField:'last_name',
         text:'Last Name'},
        
         {dataField:'email',
          text:'Email'},
        
        {dataField:'gender',
         text:'Gender'},
        
         {dataField:'ip_address',
          text:'IP Address'}

    ]

    return(
        <div>
            <BootstrapTable 
            keyField='id'
            columns={column}
            data={tabledata}
            
            />
        </div>
    )
}
export default Table2;