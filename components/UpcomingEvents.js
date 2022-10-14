import React from "react";
import { Row, Col, Container, Button, Carousel } from "react-bootstrap";
import Image from "next/image";
import finTechEvents from "../data/home.json";

const UpcomingEvents = () => {
    return (
        <section data-aos="fade-up" id="upcoming">
            <div className="container d-none d-lg-block h-100">
                <Row className="h-100">
                    <Col lg={4} className="upcoming-col p-0 h-100">
                        <div
                            className="bg-secondary ft-shadow-1 py-4 h-100 inverted-border-radius"
                            data-aos="slide-up"
                            data-aos-duration="5000"
                        >
                            <h1 className="display-1 my-0 text-white text-center">20+</h1>
                            <h1 className="fs-2 my-0 text-white text-center text-uppercase">projects</h1>
                            {/* <p className='my-0 fs-1 text-uppercase text-white'>projects</p> */}
                        </div>
                        <div
                            className="bg-ft-skyblue ft-shadow-1 py-4 h-100 inverted-border-radius-2"
                            data-aos="slide-up"
                            data-aos-duration="5000"
                        >
                            <h1 className="display-1 my-0 text-white text-center">100+</h1>
                            <h1 className="fs-2 my-0 text-white text-center text-uppercase">members</h1>
                            {/* <p className='my-0 fs-1 text-uppercase text-white'>members</p> */}
                        </div>
                        <div
                            className="bg-ft-gray ft-shadow-1 py-4 h-100 inverted-border-radius-3"
                            data-aos="slide-up"
                            data-aos-duration="5000"
                        >
                            <h1 className="display-1 my-0 text-white text-center">4</h1>
                            <h1 className="fs-2 my-0 text-white text-center text-uppercase">departments</h1>
                            {/* <p className='my-0 fs-1 text-uppercase text-white'>departments</p> */}
                        </div>
                    </Col>

                    <Col lg={8} className="upcoming-col upcoming-col-2-bg p-0 h-100">
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
            <div className="d-xs-block d-lg-none h-100 w-100">
                <div
                    className="bg-secondary ft-shadow-1 py-4 inverted-border-radius h-15"
                    data-aos="fade-right"
                    data-aos-duration="8000"
                >
                    <h1 className="display-5 my-0 text-white text-center">20+</h1>
                    <h1 className="fs-5 my-0 text-white text-center text-uppercase">projects</h1>
                </div>
                <div
                    className="bg-ft-skyblue ft-shadow-1 py-4 inverted-border-radius-2 h-15"
                    data-aos="fade-left"
                    data-aos-duration="8000"
                >
                    <h1 className="display-5 my-0 text-white text-center">100+</h1>
                    <h1 className="fs-5 my-0 text-white text-center text-uppercase">members</h1>
                </div>
                <div
                    className="bg-ft-gray ft-shadow-1 py-4 inverted-border-radius-3 h-15"
                    data-aos="fade-right"
                    data-aos-duration="8000"
                >
                    <h1 className="display-5 my-0 text-white text-center">4</h1>
                    <h1 className="fs-5 my-0 text-white text-center text-uppercase">departments</h1>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center w-100 h-65">
                    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-25">
                        <div className="d-flex align-items-center w-100 ">
                            <div className="homepage-title-line mx-2"></div>
                            <h2 className="text-primary display-4 m-0 mx-2">UPCOMING EVENTS</h2>
                            <div className="homepage-title-line mx-2"></div>
                        </div>
                        <div className="text-secondary d-flex justify-content-center">
                            <p className="m-0">DON'T MISS OUT!</p>
                        </div>
                    </div>
                    <div className="carousel-holder d-flex justify-content-center h-75 w-100">
                        <Carousel className="h-50 carousel-custom mt-3">
                            {finTechEvents.map((event) => (
                                <Carousel.Item className="w-100 h-100" interval={1000} key={event.id}>
                                    <div className="event-holder">
                                        <a href="/" className="p-0">
                                            <img src={event.image} alt="First slide" />
                                        </a>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
