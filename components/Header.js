import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleOffCanvas = () => {
        setShow((show) => !show);
    };
    return (
        <>
            <div className="d-none d-md-flex bg-primary justify-center align-items-center">
                <div className="px-0 mx-0" style={{ flex: "0 0 auto", width: "90%" }}>
                    <Navbar
                        collapseOnSelect
                        expand="md"
                        variant="dark"
                        sticky="top"
                        bg="primary"
                        className="justify-content-center pt-0"
                    >
                        <Nav className="nav py-0 col-12 col-md-auto mb-2 mb-md-0" style={{ alignItems: "center" }}>
                            <Nav.Link href="#home" className="nav-link px-3">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#about" className="nav-link px-3 ">
                                About us
                            </Nav.Link>
                            <Nav.Link href="#projects" className="nav-link px-3">
                                Projects
                            </Nav.Link>
                            <Navbar.Brand
                                href="/"
                                className="px-2 text-dark text-decoration-none pt-0 pb-0 mx-3 d-flex justify-content-center ft-logo"
                            >
                                <img
                                    src="/club-logo.png"
                                    width={57}
                                    height={48}
                                    style={{ zIndex: 10 }}
                                    className="mt-2"
                                />
                            </Navbar.Brand>
                            <Nav.Link href="#events" className="nav-link px-3">
                                Events
                            </Nav.Link>
                            <Nav.Link href="#blog" className="nav-link px-3">
                                Blog
                            </Nav.Link>
                            <Nav.Link href="#more" className="nav-link ps-3">
                                More
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <div className="px-0 mx-0" style={{ flex: "0 0 auto", width: "7%" }}>
                    <button className="mx-0 btn btn-secondary text-white sign-in-btn">Sign in</button>
                </div>
            </div>

            <div className="d-xs-block d-md-none bg-primary sticky-top pb-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="ft-logo px-2 ms-3 me-0">
                        <img src="/club-logo.png" width={57} height={48} style={{ zIndex: 10 }} className="mt-2" />
                    </div>
                    <div className="me-1">
                        <Button className="btn btn-white" onClick={handleShow}>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="d-xs-block d-md-none">
                <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-primary">
                    <Offcanvas.Header>
                        <Offcanvas.Title></Offcanvas.Title>
                        <i className="bi bi-x-circle fs-1 text-white" onClick={handleClose}></i>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navbar
                            collapseOnSelect
                            expand="md"
                            variant="dark"
                            sticky="top"
                            bg="primary"
                            className="justify-content-center pt-0"
                        >
                            <Nav className="nav py-0 col-12 col-md-auto mb-2 mb-md-0" style={{ alignItems: "center" }}>
                                <Nav.Link href="#home" className="nav-link" onClick={toggleOffCanvas}>
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#about" className="nav-link" onClick={toggleOffCanvas}>
                                    About us
                                </Nav.Link>
                                <Nav.Link href="#projects" className="nav-link" onClick={toggleOffCanvas}>
                                    Projects
                                </Nav.Link>
                                <Nav.Link href="#events" className="nav-link" onClick={toggleOffCanvas}>
                                    Events
                                </Nav.Link>
                                <Nav.Link href="#blog" className="nav-link" onClick={toggleOffCanvas}>
                                    Blog
                                </Nav.Link>
                                <Nav.Link href="#more" className="nav-link" onClick={toggleOffCanvas}>
                                    More
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    );
};

export default Header;
