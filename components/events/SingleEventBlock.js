import React from 'react'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

const SingleEventBlock = (props) => {
    return (
        <>
            <div className='container mt-5'>
                <Row className="justify-content-center align-items-center ft-shadow-1 single-event-block">
                    <Col md={2} className="d-none d-md-block bg-ft-darkblue h-100 events-date-radius">
                        <div className='pt-4 d-flex justify-content-center display-3 text-white events-text-date'>
                            {moment(props.date).format("DD")}
                        </div>
                        <div className='d-flex justify-content-center fs-1 text-white'>
                            {moment(props.date).format("ddd")}
                        </div>
                    </Col>

                    <Col md={7} className="d-none d-md-block ps-5">
                        <div className="">
                            <h2 className='fs-2 events-text-title'>
                                {props.name}
                            </h2>
                        </div>
                        <div className=''>
                            <span className="text-ft-yellow"><i className="bi bi-clock-fill"></i></span>
                            &nbsp;&nbsp;{props.time}
                        </div>

                        <div className=''>
                            <span className="text-ft-yellow"><i className="bi bi-geo-alt-fill"></i></span>
                            &nbsp;&nbsp;{props.location}
                        </div>
                    </Col>

                    {/* MOBILE */}

                    <div className="d-flex d-md-none">
                        <Col className="col-3 bg-ft-darkblue py-2 border-radius-1">
                            <div className='d-flex justify-content-center display-3 text-white events-text-date'>
                            {moment(props.date).format("DD")}
                            </div>
                            <div className='d-flex justify-content-center fs-1 text-white'>
                            {moment(props.date).format("ddd")}
                            </div>
                        </Col>

                        <Col className="col-9 d-flex justify-content-center align-items-center px-2">
                            <div className="d-flex justify-content-center">
                                <h2 className='fs-2 events-text-title'>
                                    {props.name}
                                </h2>
                            </div>
                        </Col>
                    </div>

                    <Row className="d-flex d-md-none">
                        <Col className='col-12 ps-4'>
                            <span className="text-ft-yellow"><i className="bi bi-clock-fill"></i></span>
                            &nbsp;&nbsp;{props.time}
                        </Col>

                        <Col className='col-12 ps-4'>
                            <span className="text-ft-yellow"><i className="bi bi-geo-alt-fill"></i></span>
                            &nbsp;&nbsp;{props.location}
                        </Col>
                    </Row>

                    <Col sm={12} md={3} className='d-flex justify-content-center'>
                        <div>
                            <button href="#calendar-link"
                                className='btn btn-ft-skyblue btn-lg'>
                                    <i className="bi bi-calendar2-heart-fill"></i>
                                    &nbsp;&nbsp;Add to calendar
                            </button>
                        </div>
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default SingleEventBlock