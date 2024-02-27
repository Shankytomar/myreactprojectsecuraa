import React from "react";
import { ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const ChartModalComponent =({name, showFilmModal,setShowFilmModalFun, filmList }) =>{

    console.log("film list ",filmList)

    return(

        <Modal show={showFilmModal} onHide={()=>{setShowFilmModalFun(false)}}>
            <Modal.Header closeButton>
                <Modal.Title>Films links of {name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                {
                    filmList.map((ele)=>{
                       return <ListGroup.Item><Link to={ele}>{ele}</Link></ListGroup.Item>
                        //return <li>{ele}</li>
                    })
                }
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}

export default ChartModalComponent;