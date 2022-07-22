import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Image from 'next/image'

const UpcomingEvents = () => {
    return (
        <section className='' data-aos='fade-up' id="upcoming">
            <div className="container-fluid">
            <Row>
                <Col lg={4}>

                </Col>

                <Col lg={8}>
                    <div className="d-flex justify-content-end">
                        <h1 className="display-1 text-right">
                            Upcoming Events
                        </h1>
                    </div>

                    <div className="d-flex justify-content-end">
                        <p className="text-secondary fs-3">
                            DON'T MISS OUT!
                        </p>
                    </div>

                    <div className="d-flex justify-content-end">
                        <div className="border w-50 border-ft-gray" style={{borderColor: '#77878B'}}></div>
                    </div>

                </Col>
            </Row>
            </div>
        </section>
    )
}

export default UpcomingEvents