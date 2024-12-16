import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import '../Style/main.scss'
import { CSSTransition } from 'react-transition-group';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false
        };

        // Создаем реф для элемента, который будет анимироваться
        this.dropdownRef = React.createRef();
    }

    render() {
        return (
            <Navbar expand="lg" className="bg-primary">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://avatars.mds.yandex.net/i?id=0ed7ce9d54a099d0b5a97c1da81dea37b4970337-7946262-images-thumbs&n=13"
                            width="50vw"
                            className="d-inline-block align-top"
                            alt="React-Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="flex-container">
                            <Nav className="lg-part-navigation">
                                <Nav.Link className="center flex-grow-1" href="#home">Home</Nav.Link>
                                <Nav.Link className="center flex-grow-1" href="#link">Link</Nav.Link>
                                    <NavDropdown
                                    className="flex-grow-1"
                                    title="Dropdown-center"
                                    id="basic-nav-dropdown"
                                    show={this.state.showDropdown}
                                    onToggle={(expanded) => this.setState({ showDropdown: expanded })}
                                    menuVariant="dropdown-center"
                                >
                                    <CSSTransition
                                        in={this.state.showDropdown}
                                        timeout={600}
                                        classNames="nav-menu-part"
                                        unmountOnExit
                                        nodeRef={this.dropdownRef} // Передаем ref
                                        appear={true}
                                    >
                                        <div ref={this.dropdownRef}>
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </div>
                                    </CSSTransition>
                                </NavDropdown>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
