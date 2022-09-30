import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Departments = ({ departmentsInfo }) => {
    const [activeDept, setActiveDept] = useState(1);

    return (
        <div className="" data-aos="fade-up" id="departments">
            <div className="container-fluid d-lg-block">
                <Row className="department-container">
                    <div className="department-title-container-mobile ">
                        <div className="department-title-line" />
                        <h2 className="fs-2 department-title text-secondary">Our Departments</h2>
                        <div className="department-title-line" />
                    </div>
                    <Col lg={6} md={1} className="department-info">
                        <div className="department-info-container">
                            <div className="department-info-text mb-2">
                                <div className="department-title-container">
                                    <div className="department-title-line" />
                                    <h2 className="fs-2 department-title text-secondary">Our Departments</h2>
                                    <div className="department-title-line" />
                                </div>

                                <h2 className="display-4" style={{ marginBottom: 0 }}>
                                    {departmentsInfo[activeDept - 1].name}
                                </h2>
                                <p className="department-info-description">
                                    {departmentsInfo[activeDept - 1].description}
                                </p>
                            </div>
                            <div className="join-us-button py-2 px-5 text-white bg-secondary">Join Us</div>
                        </div>

                        <div>
                            <div className="department-select mt-xxl-5">
                                {departmentsInfo.map((dept) => {
                                    const borderClass = `department-item-border-${dept.id}`;
                                    const paddingClass =
                                        dept.id === activeDept ? "selected-department" : "unselected-department";
                                    const bgClasses = ["bg-primary", "bg-secondary", "bg-ft-skyblue", "bg-ft-gray"];
                                    const bgClass = bgClasses[dept.id - 1];
                                    const className = `department-select-item ft-shadow-1 ${borderClass} ${paddingClass} 
                                    ${bgClass}`;
                                    return (
                                        <div
                                            onClick={() => {
                                                setActiveDept(dept.id);
                                            }}
                                            className={className}
                                            key={dept.id}
                                        >
                                            <h2 className="department-select-text display-2 my-0 text-white">
                                                0{dept.id}
                                            </h2>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={1} className="department-image-container">
                        <img className="department-image" src={departmentsInfo[activeDept - 1].cover} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Departments;
