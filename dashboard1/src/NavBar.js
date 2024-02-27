import React from "react";
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap'
const NavBar = (props)=>{

    return (
    <Navbar className="border border-info bg-dark" style={{}}expand="lg">
      <Container>
        <Navbar.Brand style={{color:"rgba(74, 240, 244, 0.8)", textDecoration:"underline",textShadow:"2px 1px 3px rgba(74, 153, 244, 0.8)"}} href=""><h1>{props.title}</h1></Navbar.Brand>
      </Container>
    </Navbar>
    )
}
export default NavBar;