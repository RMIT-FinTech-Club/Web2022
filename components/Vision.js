import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
const Vision = () => {
    return (
        <section data-aos="fade-up" id="vision-mission">
            <div className="d-none d-lg-block container h-100 ">
                <Row className="h-100">
                    <Col className="vimi-col bg-secondary" id="vision-col">
                        <div className="vimi-body h-100 m-0">
                            <h1 className="display-1 text-center h-15 m-0 mt-4">Vision</h1>
                            <div className="p-holder">
                                <p className="vimi-p">
                                    Our vision is to create an environment that would incubate students, turning them from
                                    FinTech enthusiasts to future leader within the FinTech space. From expanding our club
                                    connections with companies to building innovative FinTech products. We wish to create
                                    many opportunities for the members to not only learn but also expand their connections
                                    within the space. This would allow the members to build confidence they need to interact 
                                    and pursue a career within the FinTech industry. 
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="vimi-col bg-primary" id="mission-col">
                        <div className="vimi-body h-100 m-0">
                            <h1 className="display-1 text-center text-secondary h-15 m-0 mt-4">Mission</h1>
                            <div className="p-holder">
                                <p className="vimi-p text-white">
                                    Develop a community of FinTech enthusiasts beyond the RMIT community and expand the club's 
                                    presence among university and highschool students in Vietnam. To build viable FinTech products with 
                                    potential commercial use. To create an environment that would equip our member with the technical
                                    skills, knowledge, network, and most importantly, the confidence to engage with the FinTech industry
                                    beyond the scope and boundaries of our university walls. That is what we must do. Not to adhere our 
                                    responsibilities but a promise from our genuine passion and dedication.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="d-xs-block d-lg-none h-100 w-100">
                <div className="d-flex flex-column justify-content-center w-100 h-50 bg-secondary" id="vision">
                    <h1 className="display-1 text-center">Vision</h1>
                    <div className="p-holder">
                        <p className="vimi-p m-0">
                            Our vision is to create an environment that would incubate students, turning them from
                            FinTech enthusiasts to future leader within the FinTech space. From expanding our club
                            connections with companies to building innovative FinTech products. We wish to create
                            many opportunities for the members to not only learn but also expand their connections
                            within the space. This would allow the members to build confidence they need to interact 
                            and pursue a career within the FinTech industry. 
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center w-100 h-50 bg-primary" id="mission">
                    <h1 className="display-1 text-center text-secondary">Mission</h1>
                    <div className="p-holder">
                        <p className="vimi-p m-0 text-white">
                            Develop a community of FinTech enthusiasts beyond the RMIT community and expand the club's 
                            presence among university and highschool students in Vietnam. To build viable FinTech products with 
                            potential commercial use. To create an environment that would equip our member with the technical
                            skills, knowledge, network, and most importantly, the confidence to engage with the FinTech industry
                            beyond the scope and boundaries of our university walls. That is what we must do. Not to adhere our 
                            responsibilities but a promise from our genuine passion and dedication.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
