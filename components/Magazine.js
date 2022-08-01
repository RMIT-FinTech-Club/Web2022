import { Col, Image, Row } from "react-bootstrap";

const Magazine = () => {
    return (
        <div data-aos="fade-up" className="container-fluid p-4">
            <h1>FinTech Magazine</h1>
            <Row className="mt-4 h-auto">
                <Col lg={4} md={12}>
                    <Image className="w-100" height={400} src="/projects/magazine-cover.jpg" />
                </Col>
                <Col lg={8} md={12}>
                    <div className="mb-4">
                        <h2 className="text-uppercase fs-4 text-lg-left">FinTech Magazine - Special Edition</h2>
                        <p>01/2022 ● 58 pages</p>
                    </div>
                    <p>
                        This Magazine was written by our beloved and talented member in alignment with our mission of
                        promoting FinTech knowledge.
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default Magazine;
