import React from "react";
import { Modal,Form, Button } from "react-bootstrap";

const EditModalComponent = ({showEdit, setShowEditFun, selectedRow, setSelectedRowFun, results, setResultsFun}) =>{
    // const resultIterable = [...result]
    console.log("result datatype =>",typeof results)
    const handleFieldChange =(fieldName, value)=>{
        setSelectedRowFun(fieldName,value);
    }

    const handleSaveButton=()=>{
        const updatedResult = [...results];
        for (let i = 0; i < results.length; i++) {
            if (results[i].index == selectedRow.index) {
              updatedResult[i].name = selectedRow.name;
              updatedResult[i].rotation_period = selectedRow.rotation_period;
              updatedResult[i].orbital_period = selectedRow.orbital_period;
              updatedResult[i].diameter = selectedRow.diameter;
              updatedResult[i].climate = selectedRow.climate;
              updatedResult[i].gravity = selectedRow.gravity;
              updatedResult[i].terrain = selectedRow.terrain;
              updatedResult[i].surface_water = selectedRow.surface_water;
              updatedResult[i].population = selectedRow.population;
            }}
          
          setResultsFun(updatedResult);
          setShowEditFun(false)
    }

    return (

        <Modal show={showEdit} onHide={()=>setShowEditFun(false)} size="lg">
            
            <Modal.Header closeButton>
                <Modal.Title>Editin Row</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name*</Form.Label>
                            <Form.Control 
                                type="text"
                                value={selectedRow ? selectedRow.name:""}
                                onChange={(e)=>{handleFieldChange("name",e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rotation Period*</Form.Label>
                            <Form.Control 
                                type="text"
                                value={selectedRow ? selectedRow.rotation_period:""}
                                onChange={(e)=>{handleFieldChange("rotation_period",e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Orbital Period*</Form.Label>
                            <Form.Control 
                                type="text"
                                value={selectedRow ? selectedRow.orbital_period:""}
                                onChange={(e)=>{handleFieldChange("orbital_period",e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Diameter</Form.Label>
                            <Form.Control 
                                type="text"
                                value={selectedRow ? selectedRow.diameter:""}
                                onChange={(e)=>{handleFieldChange("diameter",e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Climate</Form.Label>
                            <Form.Control 
                                type="text"
                                value={selectedRow ? selectedRow.climate:""}
                                onChange={(e)=>{handleFieldChange("climate",e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Gravity</Form.Label>
                            <Form.Control 
                                type="text"
                                value={selectedRow ? selectedRow.gravity:""}
                                onChange={(e)=>{handleFieldChange("gravity",e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Surface water</Form.Label>
                            <Form.Control 
                                type="text"
                                value={selectedRow ? selectedRow.surface_water:""}
                                onChange={(e)=>{handleFieldChange("surface_water",e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Population</Form.Label>
                            <Form.Control 
                                type="text"
                                value={selectedRow ? selectedRow.population:""}
                                onChange={(e)=>{handleFieldChange("population",e.target.value)}}
                            />
                        </Form.Group>
                    </Form>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={()=>{setShowEditFun(false)}}>
                  Cancel
                </Button>
                <Button
                  variant="success"  onClick={handleSaveButton}
                >
                  Save
                </Button>
            </Modal.Footer>
            
        </Modal>
    )
}
export default EditModalComponent;
//