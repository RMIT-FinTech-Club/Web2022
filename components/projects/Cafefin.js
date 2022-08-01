import { Col, Image, Row } from "react-bootstrap";

const Cafefin = () => {
    const READ_NOW_URL = "https://www.facebook.com/rmitfintechclub/photos/a.287261069527134/417750456478194";
    const SEE_ALL_URL = "https://www.facebook.com/media/set/?set=a.287261069527134&type=3";
    const open = (url) => {
        window.open(url, "_blank");
    };
    return (
        <div className="d-block container-fluid py-4 px-lg-4 mb-5">
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
                    <p className="fs-5">
                        CafeFin is the weekly news series brought to you by FinTech Club. We deliver the hottest and
                        most exciting news on finance and technology
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

export default Cafefin;
