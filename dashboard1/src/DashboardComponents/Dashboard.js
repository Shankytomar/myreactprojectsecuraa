import React, { useEffect, useState } from "react";
import {Container, Row, Col, Stack} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tile from "./TileComponment";
import { BarGraphComponent,BarGraphComponent2 , DoughNutComponent } from "./Charts";
import axios from "axios";
import TableMajor from "./TableComponents/TableMajor";
import BootstrapTable1Component from "./TableComponents/BootstrapTable1";

const Dashboard = () =>{

  //for bar 2
    const [names,setNames] = useState([])
    const [films, setFilms] = useState([]);
    //universal
    const [result, setResult] = useState([]);
    const [counts, setCounts] = useState(null);
    
   
    const setResultFun = (value) => {
      setResult(value);
    }

    useEffect(()=>{
    const ApiCall1 = async ()=> {
        
        //let response;
        try {
          const response = await axios.get('https://swapi.dev/api/planets/');
          //adding index
          response.data.results.forEach((item, index) => {
            item.index = index + 1;
          });
          await setCounts(response.data.count);
          await setResult(response.data.results);
          setFilms(response.data.results.map((ele)=>{return ele.films.length}))
          setNames(response.data.results.map((ele)=>{return ele.name}));
          console.log("films",films)
          console.log(response)
         
        } catch (error) {
          // Handle errors here
          console.error('Error fetching planets data:', error);
          throw error; // Re-throw the error to propagate it to the caller
        }};
    ApiCall1()
    },
    []
    );
    
    return(
             <Container fluid 
              > {/*width: 100% across all viewport and device sizes*/}
                
                <Row xs={3} className="">

                    <Col className="" style={{maxWidth:"33%"}}><Tile title="Count" color="rgb(255,111,105)" data={counts} /></Col>
                    <Col className="" style={{maxWidth:"33%"}}><Tile title="data2" color="rgb(255,186,105)" data="87"  /></Col>
                    <Col className="" style={{maxWidth:"33%"}}><Tile title="data3" color="rgb(105,174,255)" data="87"/></Col>
                </Row >
                <hr></hr>
                <Row className="border border-dark" >
                    {/* <Col className="border border-success " ><DoughNutComponent /></Col>
                    <Col className="border border-secondary" style={{backgroundColor:"rgb(227,184,184)"}}><BarGraphComponent /></Col>   */}
               
                    <Stack direction="horizontal" style={{overflow:"hidden"}}>
                    <Col className="" ><DoughNutComponent /></Col>
                    <Col className="border border-secondary" style={{backgroundColor:"rgb(227,184,184)"}}><BarGraphComponent /></Col>
                    </Stack>
               </Row>
                <Row className="" style={{padding:'5px 5px 5px 5px', backgroundColor:"rgb(91,232,128)"}}>
                    <Col><TableMajor result={result} setResultFun={setResultFun}/></Col>
                </Row>
                <Row className="border border-danger bg-white">
                  <Col className="border border-success" style={{padding:'17px 17px 17px 17px'}}><BarGraphComponent2 films={films} names={names} result={result}/></Col>
                  <hr></hr>
                  <hr></hr>
                  <Col className="" style={{padding:'17px 17px 17px 17px'}}><BootstrapTable1Component result={result}/></Col>
                </Row>
            </Container>
    )
}
export default Dashboard;