import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Welcome = () => {
    return (
        <section data-aos="fade-up" id="home">
            <div className="container-fluid d-none d-lg-block h-100">
                <Row className="h-100">
                    <Col lg={6} md={1} className="pt-7 welcome-col-1-bg welcome-col-1 p-0 h-100">
                        <div className="d-flex pe-2">
                            <h1 className="display-3">
                                <span className="text-secondary display-3">Fin</span>ance is our root
                                <br />
                                <span className="text-secondary display-3">Tech</span>nology is our weapon
                            </h1>
                        </div>
                        <div className="d-flex">
                            <p className="text-secondary fs-3">RMIT VIETNAM FINTECH CLUB</p>
                        </div>
                        <div className="d-flex justify-content-center pe-5">
                            <p className="" style={{ textAlign: "justify" }}>
                                RMIT Vietnam FinTech Club was launched with the goal to inspire, educate and increase
                                the exposure of people to FinTech and digital disruption via our workshops, meetups,
                                page contents, conferences, bootcamps, and events.
                            </p>
                        </div>
                        {/* <div className="input-group mt-3 mb-3 pe-5">
                            <input
                                type="text"
                                className="form-control newsletter py-2"
                                placeholder="Enter your email for newsletter"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                            />
                            <button className="btn btn-secondary text-white px-5" type="button" id="button-addon2">
                                Register
                            </button>
                        </div> */}
                    </Col>
                    <Col lg={6} md={1} className="d-flex welcome-col-2 h-100 p-0">
                        <div className="d-flex align-items-center justify-content-center w-100 h-75">
                            <iframe
                                className="w-75 h-50"
                                src="https://www.youtube.com/embed/uHVWItKFs3M?controls=0&amp;autoplay=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="d-xs-block d-lg-none h-100 w-100">
                <div className="d-flex justify-content-center align-items-center flex-column welcome-1-bg w-100">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <h1 className="display-1 text-center mobile-slogan">
                            <span className="text-secondary">Fin</span>ance is our root
                            <br />
                            <span className="text-secondary">Tech</span>nology is our weapon
                        </h1>
                    </div>
                    {/* <div className="input-group mt-3 mb-3 w-75">
                        <input
                            type="text"
                            className="form-control newsletter py-2 fs-input-mobile"
                            placeholder="Enter email for newsletter"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-secondary text-white fs-input-mobile"
                            type="button"
                            id="button-addon2"
                        >
                            Register
                        </button>
                    </div> */}
                </div>
                <div className="welcome-2-bg flex-column w-100 px-4">
                    <div className="d-flex align-items-center w-100 mb-3">
                        <Image
                            alt="Club logo"
                            src="/club-logo.png"
                            width={37}
                            height={28}
                            style={{ zIndex: 10 }}
                            className="me-2"
                        />
                        <p className="text-secondary m-0 fs-custom">RMIT VIETNAM FINTECH CLUB</p>
                    </div>
                    <div className="">
                        <p className="text-justify text-white fs-custom">
                            RMIT Vietnam FinTech Club was launched with the goal to inspire, educate and increase the
                            exposure of people to FinTech and digital disruption via our workshops, meetups, page
                            contents, conferences, bootcamps, and events.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
