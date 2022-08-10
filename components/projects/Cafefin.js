import { Col, Image, Row } from "react-bootstrap";
import projects from "../../data/projects.json";
const Cafefin = () => {
    const cafefin = projects.cafefin;

    const open = (url) => {
        window.open(url, "_blank");
    };
    return (
        <div data-aos="fade-up" className="d-block container-fluid py-4 px-lg-4 mb-5">
            <h1 className="display-2 text-center text-lg-start">CafeFin</h1>
            <Row className="mt-4 h-auto">
                <Col lg={4} md={12}>
                    <Image className="w-100 project-img" src="/projects/cafefin-cover.png" />
                </Col>
                <Col lg={8} md={12} className="ps-lg-4">
                    <div className="mb-4 mt-4 mt-lg-0">
                        <h2 className="fs-2 fs-lg-1">Digibank - The Inevitable Trend</h2>
                        <p className="fs-5 fs-lg-3">04/2022 ● 5 minutes</p>
                    </div>
                    <p className="">
                        CafeFin is the weekly news series brought to you by FinTech Club. We deliver the hottest and
                        most exciting news on finance and technology
                    </p>
                    <div className="mt-5 d-flex justify-content-between">
                        <div
                            onClick={() => open(cafefin.readNowUrl)}
                            className="btn btn-secondary text-white px-4 py-3 fs-5 text-uppercase action-btn"
                            type="button"
                        >
                            Read now
                        </div>
                        <div
                            onClick={() => open(cafefin.seeAllUrl)}
                            className="btn btn-primary text-white px-4 py-3 fs-5 text-uppercase action-btn"
                            type="button"
                        >
                            See all
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Cafefin;
