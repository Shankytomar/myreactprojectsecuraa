import React, { isValidElement, useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../App.css";

import { Button, Modal, Form, ModalBody } from "react-bootstrap";

import { isAlphabatic, isNumerical } from "./Regexs";

export const Api4 = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState();
  // extracting SearchBar from Search
  const { SearchBar } = Search;
  // extrating ExtractCSVButton from CSVExport
  const { ExportCSVButton } = CSVExport;

  //edit
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  //delete
  const [showDelete, setShowDelete] = useState(false);
  //validation errors
  const [validationError, setValidationError] = useState({
    name: "",
    rotation_period: "",
    orbital_period: "",
  });
  //saveButtonState
  const [saveButtonState, setSaveButtonState] = useState(true);

  //type of value in each field
  const validtype ={
    name:"alphabetic",
    rotation_period:"numeric",
    orbital_period:"numeric"
  }
  useEffect(() => {
    //api call fun
    const fetchdata = async () => {
      try {
        //call
        const response = await axios.get("http://swapi.dev/api/planets/");
        //setting apidata
        //await setApidata(response.data.results);
        //extracting out results from api data
        response.data.results.forEach((item, index) => {
          item.index = index + 1;
        });
        await setResult(response.data.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchdata();
  }, []);

  //bootstrap table
  // var data = result;
  // console.log(data);
  var column = [
    { dataField: "index", text: "ID" },
    { dataField: "name", text: "Name" },
    { dataField: "rotation_period", text: "Rotaion Period" },
    { dataField: "orbital_period", text: "Orbital Period" },
    { dataField: "diameter", text: "Diameter" },
    { dataField: "climate", text: "Climate" },
    { dataField: "gravity", text: "Gravity" },
    { dataField: "terrain", text: "Terrain" },
    { dataField: "surface_water", text: "Surface Water" },
    { dataField: "population", text: "Population" },
    //{dataField:'residents', text:'Residents'},
    //{dataField:'films', text:'Films'},
    // {dataField:'created', text:'Created'},
    // {dataField:'edited', text:'Edited'},
    // {dataField:'url', text:'url', classes:'widthclass'},
    {
      dataField: "",
      text: "Actions",
      formatter: (cell, row) => (
        <div style={{ display: "flex" }}>
          <Button
            className="btn btn-warning btn-sm mr-1"
            onClick={() => handleEdit(row)}
          >
            Edit
          </Button>
          <Button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(row)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];


  //handleDelete
  const handleDelete = (row) => {
    setShowDelete(true);
    setSelectedRow(row);
  };
  //handleCloseDelete
  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  //handleDeleteConfirm
  const handleDeleteConfirm = () => {
    //logic

    // result.map((ele) => {
    //   console.log(ele.index);
    // });
    //console.log(selectedRow);
    const updateResult = result.filter(
      (ele) => ele.index !== selectedRow.index
    );
    // updateResult.map((ele) => {
    //   console.log(ele.name);
    // });
    setResult(updateResult);
    setShowDelete(false);
  };

  //handleEdit
  const handleEdit = (row) => {
    setShowModal(true);
    setSelectedRow(row);

    //console.log("edit clicked and showmodal= " + showModal + " row= " + row);
  };

  //handleSaveChanges
  const handleSaveChanges = () => {
    //logic?
    //console.log("save button",selectedRow.name);
    // const updateResult = result.filter(
    //   (ele) => ele.index !== selectedRow.index
    // );
    // setResult((result)=>
    // result.map((ele)=> {if(ele.index == selectedRow.index){ele.name=selectedRow.name} })
    // )
    //console.log("save button result",result[1].name);
    //console.log("result obj =",result)
    // result.forEach((item, index) => {
    //   if (index === 1) {
    //       item.name = selectedRow.name;
    //   }
    //});
    //let updatedResult = result
    // updatedResult.forEach((item, index) => {

    //   updatedResult[index].name = selectedRow.name;
    //   }
    //
    // updatedResult[0].name = selectedRow.name;
    // setResult(updatedResult)
    //     setShowModal(false);
    //     console.log("result after loop obj =",result)
    let updatedResult = [...result];
    for (let i = 0; i < result.length; i++) {
      if (result[i].index == selectedRow.index) {
        updatedResult[i].name = selectedRow.name;
        updatedResult[i].rotation_period = selectedRow.rotation_period;
        updatedResult[i].orbital_period = selectedRow.orbital_period;
        updatedResult[i].diameter = selectedRow.diameter;
        updatedResult[i].climate = selectedRow.climate;
        updatedResult[i].gravity = selectedRow.gravity;
        updatedResult[i].terrain = selectedRow.terrain;
        updatedResult[i].surface_water = selectedRow.surface_water;
        updatedResult[i].population = selectedRow.population;
      }
    }
    setResult(updatedResult);
    setShowModal(false);
  };

  //handleCloseModal
  const handleCloseModal = () => {
    //resetting all validation null

    const newValidationState={
      name: "",
      rotation_period: "",
      orbital_period: "",
    }
    setValidationError(newValidationState);
    setShowModal(false);
  };

  //check validation of field value and update validation state
  const isValueNull = (fieldName, value) => {
    console.log("validation check", fieldName);
    console.log("key exist in error state =>", fieldName in validationError);
    if (fieldName in validationError) {
      console.log("field in validation state", fieldName);

      if (value == "") {
        console.log("field value is emppty");
        setValidationError((validationError) => ({
          ...validationError,
          [fieldName]: "please enter a value (required field)",
        }));
        // //disable save button
        // setSaveButtonState(false)
        // console.log("save button state ",saveButtonState)
        return false;
      } else {
        console.log("field value is not empty");
        setValidationError((validationError) => ({
          ...validationError,
          [fieldName]: "",
        }));
        // setSaveButtonState(true)
        // console.log("save button state ",saveButtonState)
        validationCheck(fieldName, value);
        return true;
      }
    }
  };
  //handleFieldChange to update selectedRow state
  const handleFieldChange = (fieldName, value) => {
    console.log("handlefieldchange run =>", fieldName, value);
    setSelectedRow((prevRow) => ({ ...prevRow, [fieldName]: value }));
    //check field value is empty or not and update validation state
    isValueNull(fieldName, value);
    
  };

  //check form has any active validationErrors
  const validForm = () => {
    for (let key in validationError) {
      if (validationError[key] !== "") {
        //disable save button
        setSaveButtonState(false);
        console.log("save button state ", saveButtonState);
        return false;
      }
    }

    setSaveButtonState(true);
    console.log("save button state ", saveButtonState);
    return true;
  };
  //validation of numeric and alphbetic
  const validationCheck = (fieldName,value) =>{
    console.log("is it numeric ",isNumerical(value))
    console.log("is it alphabetic",isAlphabatic(value))
    if(validtype[fieldName] == "alphabetic"){
      if(!isAlphabatic(value)){
      setValidationError((validationError) => ({
        ...validationError,
        [fieldName]: "enter alphabets only",
      }));
    }}
    if(validtype[fieldName] == "numeric"){
      if(!isNumerical(value)){
      setValidationError((validationError) => ({
        ...validationError,
        [fieldName]: "enter numeric only",
      }));
    }}

  }
  //check is there any error in validation
  useEffect(() => {
    validForm();
  }, [validationError]);

  //pagination
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    //showTotal:true //showing row out of total row
  });
  //console.log("result=>",result)
  return (
    <div>
      {/* {JSON.stringify(apidata)} */}
      {/* <BootstrapTable keyField="name" data={data} columns={column}/> */}
      <ToolkitProvider
        keyField="index"
        columns={column}
        data={result}
        search={{
          defaultSearch: "",
        }}
        exportCSV={{ fileName: "export.csv" }}
      >
        {(props) => (
          <div>
            <div className="container mb-3" style={{ display: "flex" }}>
              <SearchBar {...props.searchProps} />
              <ExportCSVButton
                {...props.csvProps}
                className="btn btn-secondary ml-3"
              >
                Export CSV
              </ExportCSVButton>
            </div>
            <BootstrapTable {...props.baseProps} pagination={pagination} />
            {/* <ReactForm {...apidata} /> */}

            {/* //edit modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Updating Row</Modal.Title>
              </Modal.Header>
              <ModalBody style={{ height: "350px", overflowY: "auto" }}>
                <Form>
                  <Form.Group>
                    <Form.Label>Name*</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedRow ? selectedRow.name : ""}
                      onChange={(e) =>
                        handleFieldChange("name", e.target.value)
                      }
                      isInvalid={!!validationError.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {validationError.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Rotation Period*</Form.Label>
                    <Form.Control
                      type="text"
                      //binding input with row value
                      value={selectedRow ? selectedRow.rotation_period : ""}
                      //updating state with latest input
                      onChange={(e) =>
                        handleFieldChange("rotation_period", e.target.value)
                      }
                      isInvalid={!!validationError.rotation_period}
                    />
                    <Form.Control.Feedback type="invalid">
                      {validationError.rotation_period}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Orbital Period*</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedRow ? selectedRow.orbital_period : ""}
                      onChange={(e) =>
                        handleFieldChange("orbital_period", e.target.value)
                      }
                      // checking truth or falsy
                      isInvalid={!!validationError.orbital_period}
                    />
                    <Form.Control.Feedback type="invalid">
                      {validationError.orbital_period}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Diameter</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedRow ? selectedRow.diameter : ""}
                      onChange={(e) =>
                        handleFieldChange("diameter", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Climate</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedRow ? selectedRow.climate : ""}
                      onChange={(e) =>
                        handleFieldChange("climate", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Gravity</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedRow ? selectedRow.gravity : ""}
                      onChange={(e) =>
                        handleFieldChange("gravity", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Surface Water</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedRow ? selectedRow.surface_water : ""}
                      onChange={(e) =>
                        handleFieldChange("surface_water", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Population</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedRow ? selectedRow.population : ""}
                      onChange={(e) =>
                        handleFieldChange("population", e.target.value)
                      }
                    />
                  </Form.Group>
                </Form>
              </ModalBody>
              <Modal.Footer style={{}}>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cancel
                </Button>
                <Button
                  variant="success"
                  onClick={handleSaveChanges}
                  disabled={!saveButtonState}
                >
                  Save
                </Button>
              </Modal.Footer>
            </Modal>

            {/* //delete modal */}

            <Modal
              //state
              show={showDelete}
              //function
              onHide={handleCloseDelete}
            >
              <Modal.Header closeButton>
                <Modal.Title>Deleting Row</Modal.Title>
              </Modal.Header>
              <ModalBody>
                <p className="btn btn-outline-danger disabled btn-block">
                  press delete to Confirm
                </p>
                <Modal.Footer style={{}}>
                  <Button variant="secondary" onClick={handleCloseDelete}>
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={handleDeleteConfirm}>
                    Delete
                  </Button>
                </Modal.Footer>
              </ModalBody>
            </Modal>
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default Api4;
