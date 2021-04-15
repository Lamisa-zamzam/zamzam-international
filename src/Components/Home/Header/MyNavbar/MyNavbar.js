import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

const MyNavbar = () => {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand as={Link} to="/home" className="brandName">
                Navbar
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Blog
                    </Nav.Link>
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Projects
                    </Nav.Link>
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Contact
                    </Nav.Link>
                    <Nav.Link as={Link} to="/admin" className="navLink">
                        Admin
                    </Nav.Link>
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Services
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
