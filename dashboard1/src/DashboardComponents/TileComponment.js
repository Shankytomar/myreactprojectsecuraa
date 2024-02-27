import React from "react";
import { Card, Button } from "react-bootstrap";

export const Tile = (props) =>{
  
    return(
    <Card style={{ height:"9rem", backgroundColor: props.color,  justifyContent:"center", alignItems:"center"}}>
          
        <div  className="" style={{display:"flex", width:"100%"}}>
        <div className="" style={{width:"70%", display:"flex", justifyContent:"center", alignItems:"center"}}><h3>{props.title}</h3></div>
        <div className="" style={{width:"30%"}}><h1>{props.data}</h1></div>
        </div>
        
      
    </Card>
    )
}

export default Tile;