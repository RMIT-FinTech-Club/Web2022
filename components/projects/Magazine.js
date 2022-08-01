import { Col, Image, Row } from "react-bootstrap";

const Magazine = () => {
    const READ_NOW_URL = "https://issuu.com/rmitfintechclub/docs/fintech_magazine_-_special_edition-2-59";
    const SEE_ALL_URL = "https://issuu.com/rmitfintechclub";
    const open = (url) => {
        window.open(url, "_blank");
    };
    return (
        <div className="d-block container-fluid py-4 px-lg-4 mb-5">
            <h1 className="display-2 text-center text-lg-start">FinTech Magazine</h1>
            <Row className="mt-4 h-auto">
                <Col lg={4} md={12}>
                    <Image className="w-100 project-img" src="/projects/magazine-cover.png" />
                </Col>
                <Col lg={8} md={12} className="ps-lg-4">
                    <div className="mb-4 mt-4 mt-lg-0">
                        <h2 className="fs-2 fs-lg-1">FinTech Magazine - Special Edition</h2>
                        <p className="fs-5 fs-lg-3">01/2022 ● 14 minutes</p>
                    </div>
                    <p className="fs-5">
                        This Magazine was written by our beloved and talented member in alignment with our mission of
                        promoting FinTech knowledge.
                    </p>
                    <div className="mt-5 d-flex justify-content-between">
                        <div
                            onClick={() => open(READ_NOW_URL)}
                            className="btn btn-secondary text-white px-4 py-3 fs-4 text-uppercase action-btn"
                            type="button"
                        >
                            Read now
                        </div>
                        <div
                            onClick={() => open(SEE_ALL_URL)}
                            className="btn btn-primary text-white px-4 py-3 fs-4 text-uppercase action-btn"
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

export default Magazine;
