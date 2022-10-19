import { Image, Col, Row } from "react-bootstrap";
import projects from "../../data/projects.json";
const RFBC = () => {
    const rfbc = projects.rfbc;

    const open = (url) => {
        window.open(url, "_blank");
    };
    return (
        <div data-aos="fade-up" className="d-block container-fluid py-4 px-lg-4 mb-5">
            <h1 className="display-2 text-center text-lg-start">RMIT FinTech Blockchain Competition</h1>
            <Row className="mt-4 h-auto">
                <Col lg={6} md={12}>
                    <Image className="w-100 project-img" src="/projects/rfbc-cover.png" />
                </Col>
                <Col lg={6} md={12} className="ps-lg-4">
                    <div className="mb-4 mt-4 mt-lg-0">
                        <p className="">
                            This competition helps promote awareness of the Blockchain/FinTech application and enhance
                            the participants' practical skills and knowledge in tackling real-world problems.
                        </p>
                    </div>
                    <div className="d-flex justify-content-between mt-auto">
                        <div
                            onClick={() => open(rfbc.url)}
                            className="btn btn-secondary text-white px-2 py-1 fs-5 text-uppercase action-btn-2"
                            type="button"
                        >
                            See more
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RFBC;
