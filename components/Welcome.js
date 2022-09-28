import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

const Welcome = () => {
    return (
        <section data-aos="fade-up" id="home" className="">
            <div className="container-fluid d-none d-lg-block">
                <Row>
                    <Col lg={6} md={1} className="pt-7 welcome-col-1-bg welcome-col-1">
                        <div className="d-flex pe-2">
                            <h1 className="display-3">
                                <span className="text-secondary">Fin</span>ance is our root
                                <br />
                                <span className="text-secondary">Tech</span>nology is our weapon
                            </h1>
                        </div>
                        <div className="d-flex">
                            <p className="text-secondary fs-3">RMIT VIETNAM FINTECH CLUB</p>
                        </div>
                        <div className="d-flex justify-content-center pe-5">
                            <p className="">
                                RMIT Vietnam FinTech Club was launched with the goal to inspire, educate and increase
                                the exposure of people to FinTech and digital disruption via our workshops, meetups,
                                page contents, conferences, bootcamps, and events.
                            </p>
                        </div>
                        <div className="input-group mt-3 mb-3 pe-5">
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
                        </div>
                    </Col>
                    <Col lg={6} md={1} className="d-flex welcome-col-2">
                        <div className="caret"></div>
                        <div className="d-flex align-items-center justify-content-center">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/uHVWItKFs3M?controls=0&amp;autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="d-xs-block d-lg-none welcome-col-1-bg">
                <div className="d-flex">
                    <h1 className="display-1">
                        <span className="text-secondary">Fin</span>ance is our root
                        <br />
                        <span className="text-secondary">Tech</span>nology is our weapon
                    </h1>
                </div>
                <div className="d-flex">
                    <p className="text-secondary fs-2 pe-7">RMIT VIETNAM FINTECH CLUB</p>
                </div>
                <div className="d-flex justify-content-center pe-2">
                    <p className="">
                        RMIT Vietnam FinTech Club was launched with the goal to inspire, educate and increase the
                        exposure of people to FinTech and digital disruption via our workshops, meetups, page contents,
                        conferences, bootcamps, and events.
                    </p>
                </div>
                <div className="input-group mt-3 mb-3 pe-5">
                    <input
                        type="text"
                        className="form-control newsletter py-2"
                        placeholder="Enter email for newsletter"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                    />
                    <button className="btn btn-secondary text-white" type="button" id="button-addon2">
                        Register
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
