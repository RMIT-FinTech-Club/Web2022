import Link from "next/link";
import React from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";

const UpcomingEvents = () => {
    const events = [
        {
            id: 0,
            image: "event1.png",
        },
        {
            id: 1,
            image: "event2.png",
        },
        {
            id: 2,
            image: "event3.png",
        },
        {
            id: 3,
            image: "event3.png",
        },
    ];
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

                    <Col lg={8} className="upcoming-col upcoming-col-2-bg p-0 h-100 p-5">
                        <div className="d-flex justify-content-end">
                            <h1 className="display-1 text-right">Upcoming Events</h1>
                        </div>

                        <div className="d-flex justify-content-end">
                            <p className="text-secondary fs-3">DON'T MISS OUT!</p>
                        </div>

                        <div className="d-flex justify-content-end">
                            <div className="border w-50 border-ft-gray"></div>
                        </div>

                        <div className="d-flex justify-content-end h-75">
                            <Carousel className="h-85 w-75 carousel-custom mt-3">
                                {events.map((event) => (
                                    <Carousel.Item className="w-100 h-100" interval={1000} key={event.id}>
                                        <div className="event-holder">
                                            <Link href="/" className="p-0">
                                                <Image src={event.image} alt="First slide" />
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
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
                            {events.map((event) => (
                                <Carousel.Item className="w-100 h-100" interval={1000} key={event.id}>
                                    <div className="event-holder">
                                        <Link href="/" className="p-0">
                                            <Image src={event.image} alt="First slide" />
                                        </Link>
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
