import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
const Vision = () => {
    return (
        <section className='' data-aos='fade-up' id="vision">
            <div className='container-fluid'>
                <Row>
                    <Col className='bg-secondary'>
                        Vision
                    </Col>

                    <Col className='bg-primary'>
                        Mission
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Vision