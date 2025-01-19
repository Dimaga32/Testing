import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../../shared/components/Style/main.scss";
import CustomNavDownDrop from "./CustomNavDownDrop";

export default class NavigationBar extends React.Component {
   constructor(props: object) {
      super(props);
      this.state = {
         showDropdown: false,
      };
   }

   render() {
      return (
         <Navbar expand="lg" className="bg-primary">
            <Container fluid>
               <Navbar.Brand href="/Main">
                  <img
                     src="/logo.png"
                     width="30vw"
                     className="d-inline-block align-top"
                     alt="React-Bootstrap logo"
                  />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <div className="flex-container">
                     <Nav className="lg-part-navigation">
                        <Nav.Link
                           className="center flex-grow-1 fs-2 w-100"
                           href="/About"
                        >
                           About
                        </Nav.Link>
                        <Nav.Link
                           className="center flex-grow-1 fs-2 w-100"
                           href="MyData"
                        >
                           My data
                        </Nav.Link>
                        <Nav.Link
                           className="center flex-grow-1 fs-2 w-100"
                           href="/Support"
                        >
                           Support
                        </Nav.Link>
                        <CustomNavDownDrop />
                     </Nav>
                  </div>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      );
   }
}
