import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import '../Style/main.scss'
export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar expand="lg" className="bg-primary">
                <Container fluid>
                    <Navbar.Brand href="/Main" className="Navbar-Brand">
                        <img
                            style={{marginLeft:"1vw",marginRight:`1vw`}}
                            src="/logo.png"
                            className="d-inline-block align-top h-100"
                            alt="React-Bootstrap logo"
                            />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="flex-container">
                            <Nav className="lg-part-navigation">
                                <Nav.Link className="center flex-grow-1 fs-2 w-100" href="/JS">JavaScript</Nav.Link>
                                <Nav.Link className="center flex-grow-1 fs-2 w-100" href="/Go">Go</Nav.Link>
                                <Nav.Link className="center flex-grow-1 fs-2 w-100" href="/Python">Python</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
