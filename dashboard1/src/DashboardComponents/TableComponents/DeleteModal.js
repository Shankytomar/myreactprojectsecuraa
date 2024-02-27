import React from "react";
import { Modal,ModalBody,Button } from "react-bootstrap";
const DeleteModalComponnet = (props) =>{


    return(
        //Modal and form
        <Modal
              //state
              show={props.showDelete}
              //function
              onHide={()=>{props.setShowDeleteFun(false)}}
            >
              <Modal.Header closeButton>
                <Modal.Title>Deleting Row</Modal.Title>
              </Modal.Header>
              <ModalBody>
                <p className="btn btn-outline-danger disabled btn-block">
                  press delete to Confirm
                </p>
                <Modal.Footer style={{}}>
                  <Button variant="secondary" onClick={()=>{props.setShowDeleteFun(false)}}>
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={()=>{
                    //delete
                    const updateResult = props.results.filter(
                      (ele)=> ele.index !== props.selectedRow.index
                      )
                      props.setResultsFun(updateResult);

                    //close modal
                    props.setShowDeleteFun(false)}} >
                    Delete
                  </Button>
                </Modal.Footer>
              </ModalBody>
            </Modal>

    );
}
export default DeleteModalComponnet;
// onClick={handleCloseDelete}
// onClick={handleDeleteConfirm}