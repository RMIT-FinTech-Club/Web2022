import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Header = () => {
    const navs = [
        { id: "home", name: "Home", url: "/" },
        { id: "about-us", name: "About us", url: "/about-us" },
        { id: "projects", name: "Projects", url: "/projects" },
        { id: "events", name: "Events", url: "/events" },
        { id: "memorable-moments", name: "Moments", url: "/memorable-moments" },
        { id: "more", name: "More", url: "#" },
    ];
    const mid = Math.ceil(navs.length / 2);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleOffCanvas = () => {
        setShow((show) => !show);
    };
    return (
        <>
            <div className="d-none d-lg-flex bg-primary justify-content-center align-items-center sticky-top">
                <div className="px-0 mx-0 d-flex justify-content-center align-items-center w-100 container position-relative">
                    <Navbar
                        collapseOnSelect
                        expand="md"
                        variant="dark"
                        sticky="top"
                        bg="primary"
                        className="justify-content-center p-0 w-100"
                    >
                        <Nav className="nav py-0 col-12 col-md-auto mb-2 mb-md-0 w-100 justify-content-center">
                            <div className="d-flex align-items-center w-25 flex-row-reverse">
                                {navs
                                    .slice(0, mid)
                                    .reverse()
                                    .map((nav) => (
                                        <div key={nav.id}>
                                            <Nav.Link href={nav.url} className="nav-link px-3">
                                                {nav.name}
                                            </Nav.Link>
                                        </div>
                                    ))}
                            </div>
                            <div className="align-items-center pb-2">
                                <Navbar.Brand
                                    href="/"
                                    className="px-2 text-dark text-decoration-none pt-0 pb-0 mx-3 d-flex justify-content-center ft-logo"
                                >
                                    <Image alt="Club logo" src="/club-logo.png" className="mt-2" />
                                </Navbar.Brand>
                            </div>
                            <div className="d-flex align-items-center w-25">
                                {navs.slice(-mid).map((nav) => (
                                    <div key={nav.id}>
                                        <Nav.Link href={nav.url} className="nav-link px-3">
                                            {nav.name}
                                        </Nav.Link>
                                    </div>
                                ))}
                            </div>
                        </Nav>
                    </Navbar>
                </div>
            </div>

            <div className="d-xs-block d-lg-none bg-primary sticky-top">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="ft-logo px-2 d-flex justify-content-center ms-3 mb-2">
                        <Image
                            alt="Club logo"
                            src="/club-logo.png"
                            width={57}
                            height={48}
                            style={{ zIndex: 10 }}
                            className="mt-1"
                        />
                    </div>
                    <div className="me-1">
                        <Button className="btn btn-white d-flex align-items-center" onClick={handleShow}>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="d-xs-block d-lg-none">
                <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="end"
                    className="bg-primary"
                    style={{ width: "77%" }}
                >
                    <Offcanvas.Header>
                        <Offcanvas.Title className="text-secondary">Menu</Offcanvas.Title>
                        <i className="bi bi-x-circle-fill fs-1 text-white close-icon" onClick={handleClose}></i>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="p-0">
                        <Navbar
                            collapseOnSelect
                            expand="md"
                            variant="dark"
                            sticky="top"
                            bg="primary"
                            className="w-100 p-0"
                        >
                            <Nav className="nav py-0 col-12 col-md-auto mb-2 mb-md-0" style={{ alignItems: "center" }}>
                                {navs.map((nav) => (
                                    <div key={nav.id}>
                                        <Nav.Link href={nav.url} className="nav-link" onClick={toggleOffCanvas}>
                                            {nav.name}
                                        </Nav.Link>
                                    </div>
                                ))}
                            </Nav>
                        </Navbar>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    );
};

export default Header;
