import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import departmentsInfo from "../../data/departments.json";

const DEPARTMENT_IMAGES = {
  business: "/Business.png",
  tech: "/Tech.png",
  hr: "/HR.png",
  marketing: "/Marketing.png",
};

const Departments = () => {
  const [department, setDepartment] = useState("business");
  const changeDepartmentHandler = (newDepartment) => {
    setDepartment(newDepartment);
  };
  return (
    <section className="" data-aos="fade-up" id="departments">
      <div className="container-fluid d-lg-block">
        <Row>
          <Col lg={6} md={1} className="department-info department-row">
            {/* <div className="department-info"> */}
            <div>
              <div className="department-title-container">
                <div className="department-title-line" />
                <h2 className="fs-2 department-title text-secondary">
                  Our Departments
                </h2>
                <div className="department-title-line" />
              </div>

              <h2 className="display-4 my-xxl-4">
                {departmentsInfo[department].name}
              </h2>
              <p>{departmentsInfo[department].description}</p>
            </div>

            <div>
              <button className="mx-0 btn btn-secondary text-white join-us-button p-2">
                Join us
              </button>
              <div className="department-select mt-xxl-5">
                {Object.entries(departmentsInfo).map(([title, info]) => {
                  const borderClass = `department-item-border-${info.index}`;
                  const paddingClass = title === department ? "py-5" : "py-4";
                  let backgroundClass;
                  switch (info.index % 4) {
                    case 1:
                      backgroundClass = "bg-primary";
                      break;
                    case 2:
                      backgroundClass = "bg-secondary";
                      break;
                    case 3:
                      backgroundClass = "bg-ft-skyblue";
                      break;
                    case 0:
                      backgroundClass = "bg-ft-gray";
                      break;
                  }
                  const className = `department-select-item ft-shadow-1 ${borderClass} ${paddingClass} ${backgroundClass}`;
                  return (
                    <div
                      onClick={() => {
                        changeDepartmentHandler(title);
                      }}
                      className={className}
                    >
                      <h2 className="department-select-text display-2 my-0 text-white">
                        0{info.index}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* </div> */}
          </Col>
          <Col lg={6} md={1}>
            <img
              className="department-image"
              src={DEPARTMENT_IMAGES[department]}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Departments;
