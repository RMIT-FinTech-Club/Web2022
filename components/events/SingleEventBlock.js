import React from 'react'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

const SingleEventBlock = (props) => {
    return (
        <>
            <div className='container mt-5'>
                <Row className="justify-content-center align-items-center ft-shadow-1 single-event-block">
                    <Col md={2} className="d-none d-md-block">
                        <div className='d-flex justify-content-center display-3 text-dark events-text-date'>
                            {moment(props.date).format("DD")}
                        </div>
                        <div className='d-flex justify-content-center fs-1'>
                            {moment(props.date).format("ddd")}
                        </div>
                    </Col>

                    <Col md={7} className="d-none d-md-block">
                        <div className="">
                            <h2 className='fs-2 events-text-title'>
                                {props.name}
                            </h2>
                        </div>
                        <div className=''>
                            <span className="text-ft-yellow"><i className="bi bi-clock-fill"></i></span>
                            &nbsp;{props.time}
                        </div>

                        <div className=''>
                            <span className="text-ft-yellow"><i className="bi bi-geo-alt-fill"></i></span>
                            &nbsp;{props.location}
                        </div>
                    </Col>

                    <div className="d-flex d-md-none">
                        <Col className="col-3">
                            <div className='d-flex justify-content-center display-3 text-dark events-text-date'>
                            {moment(props.date).format("DD")}
                            </div>
                            <div className='d-flex justify-content-center fs-1'>
                            {moment(props.date).format("dd")}
                            </div>
                        </Col>

                        <Col className="col-9 d-flex justify-content-center align-items-center">
                            <div className="d-flex justify-content-center">
                                <h2 className='fs-2 events-text-title text-center'>
                                    {props.name}
                                </h2>
                            </div>
                        </Col>
                    </div>

                    <Row className="d-flex d-md-none">
                        <Col className='col-12 ps-4'>
                            <span className="text-ft-yellow"><i className="bi bi-clock-fill"></i></span>
                            &nbsp;{props.time}
                        </Col>

                        <Col className='col-12 ps-4'>
                            <span className="text-ft-yellow"><i className="bi bi-geo-alt-fill"></i></span>
                            &nbsp;{props.location}
                        </Col>
                    </Row>

                    <Col sm={12} md={3} className='d-flex justify-content-center'>
                        <div>
                            <button href="#calendar-link"
                                className='btn btn-ft-skyblue btn-lg'>Add to calendar</button>
                        </div>
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default SingleEventBlock