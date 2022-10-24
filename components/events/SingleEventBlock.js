import React from "react";
import { Row, Col } from "react-bootstrap";
import moment from "moment";

const SingleEventBlock = ({ date, time, name, location }) => {
    return (
        <>
            <div className="container mt-5">
                <Row className="justify-content-center align-items-center ft-shadow-1 single-event-block">
                    <Col md={2} className="d-none d-md-block bg-ft-darkblue h-100 events-date-radius">
                        <div className="pt-4 d-flex justify-content-center display-3 text-white events-text-date">
                            {moment(date).format("DD")}
                        </div>
                        <div className="d-flex justify-content-center fs-1 text-white">
                            {moment(date).format("ddd")}
                        </div>
                    </Col>

                    <Col md={10} className="d-none d-md-block ps-5">
                        <div className="">
                            <h2 className="events-text-title">{name}</h2>
                        </div>
                        <div className="">
                            <span className="text-ft-yellow">
                                <i className="bi bi-clock-fill"></i>
                            </span>
                            &nbsp;&nbsp;{time}
                        </div>

                        <div className="">
                            <span className="text-ft-yellow">
                                <i className="bi bi-geo-alt-fill"></i>
                            </span>
                            &nbsp;&nbsp;{location}
                        </div>
                    </Col>

                    {/* MOBILE */}

                    <div className="d-flex d-md-none">
                        <Col
                            className="col-3 bg-ft-darkblue py-2 border-radius-1"
                            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
                        >
                            <div className="d-flex justify-content-center display-3 text-white events-text-date">
                                {moment(date).format("DD")}
                            </div>
                            <div className="d-flex justify-content-center fs-1 text-white">
                                {moment(date).format("ddd")}
                            </div>
                        </Col>

                        <Col className="col-9 d-flex justify-content-center align-items-center px-2">
                            <div className="d-flex justify-content-center">
                                <h2 className="events-text-title">{name}</h2>
                            </div>
                        </Col>
                    </div>

                    <Row className="d-flex d-md-none">
                        <Col className="col-12">
                            <span className="text-ft-yellow">
                                <i className="bi bi-clock-fill"></i>
                            </span>
                            &nbsp;&nbsp;{time}
                        </Col>

                        <Col className="col-12">
                            <span className="text-ft-yellow">
                                <i className="bi bi-geo-alt-fill"></i>
                            </span>
                            &nbsp;&nbsp;{location}
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    );
};

export default SingleEventBlock;
