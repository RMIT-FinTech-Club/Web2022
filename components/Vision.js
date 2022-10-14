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
                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in classical literature, discovered the
                                    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                                    BC. This book is a treatise on the theory of ethics, very popular during the
                                    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                                    from a line in section 1.10.32.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="vimi-col bg-primary" id="mission-col">
                        <div className="vimi-body h-100 m-0">
                            <h1 className="display-1 text-center text-secondary h-15 m-0 mt-4">Mission</h1>
                            <div className="p-holder">
                                <p className="vimi-p text-white">
                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in classical literature, discovered the
                                    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                                    BC. This book is a treatise on the theory of ethics, very popular during the
                                    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                                    from a line in section 1.10.32.
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
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                            of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                            ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center w-100 h-50 bg-primary" id="mission">
                    <h1 className="display-1 text-center text-secondary">Mission</h1>
                    <div className="p-holder">
                        <p className="vimi-p m-0 text-white">
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                            of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                            ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
