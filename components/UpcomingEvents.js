import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "next/image";
import finTechEvents from "../data/home.json";

const UpcomingEvents = () => {
    return (
        <section className="" data-aos="fade-up" id="upcoming">
            <div className="container-fluid">
                <Row>
                    <Col lg={4} className="upcoming-col p-0">
                        <div
                            className="bg-secondary ft-shadow-1 py-4 h-100 inverted-border-radius"
                            data-aos="slide-up"
                            data-aos-duration="6000"
                        >
                            <h1 className="display-1 my-0 text-white text-center">20+</h1>
                            <h1 className="fs-2 my-0 text-white text-center text-uppercase">projects</h1>
                            {/* <p className='my-0 fs-1 text-uppercase text-white'>projects</p> */}
                        </div>
                        <div
                            className="bg-ft-skyblue ft-shadow-1 py-4 h-100 inverted-border-radius-2"
                            data-aos="slide-up"
                            data-aos-duration="6000"
                        >
                            <h1 className="display-1 my-0 text-white text-center">100+</h1>
                            <h1 className="fs-2 my-0 text-white text-center text-uppercase">members</h1>
                            {/* <p className='my-0 fs-1 text-uppercase text-white'>members</p> */}
                        </div>
                        <div
                            className="bg-ft-gray ft-shadow-1 py-4 h-100 inverted-border-radius-3"
                            data-aos="slide-up"
                            data-aos-duration="6000"
                        >
                            <h1 className="display-1 my-0 text-white text-center">4</h1>
                            <h1 className="fs-2 my-0 text-white text-center text-uppercase">departments</h1>
                            {/* <p className='my-0 fs-1 text-uppercase text-white'>departments</p> */}
                        </div>
                    </Col>

                    <Col lg={8} className="upcoming-col upcoming-col-2-bg p-0">
                        <div className="d-flex justify-content-end">
                            <h1 className="display-1 text-right">Upcoming Events</h1>
                        </div>

                        <div className="d-flex justify-content-end">
                            <p className="text-secondary fs-3">DON'T MISS OUT!</p>
                        </div>

                        <div className="d-flex justify-content-end">
                            <div className="border w-50 border-ft-gray"></div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <Row className="event-container">
                                <Col lg={8} className="event-col">
                                    <div className="event-holder" id="first-event">
                                        <a href="/">
                                            <img src={finTechEvents[0].image} alt="event-image" />
                                        </a>
                                    </div>
                                </Col>
                                <Col lg={4} className="event-col">
                                    <Row className="event-row">
                                        <Col lg={12} className="event-col">
                                            <div className="event-holder" id="second-event">
                                                <a href="/">
                                                    <img src={finTechEvents[1].image} alt="event-image" />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="event-row">
                                        <Col lg={6} className="event-col">
                                            <div className="event-holder" id="second-third">
                                                <a href="/">
                                                    <img src={finTechEvents[2].image} alt="event-image" />
                                                </a>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="event-col">
                                            <div className="event-holder" id="second-forth">
                                                <a href="/">
                                                    <img src={finTechEvents[3].image} alt="event-image" />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default UpcomingEvents;
