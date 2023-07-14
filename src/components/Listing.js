import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Listings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2
                style={{
                    fontSize: "36px",
                    lineHeight: "50px",
                    marginTop: "20px",
                    textAlign: "center",
                    fontWeight: "normal",
                }}
            >
                Browse stores in Chula Vista
            </h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                <Row
                    style={{
                        borderBottom: "1px solid #E8E9EB",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                                roundedCircle
                            />
                        </Col>
                        <Col style={{ textAlign: 'left' }}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/235/c6dee5a3-afe8-4e60-9156-1a02a79fc72d.jpg"
                                roundedCircle
                            />
                        </Col>
                        <Col style={{ textAlign: 'left' }}>
                            <h5 style={{ fontWeight: "bold" }}>Stop & Shop</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/648/e1c282e5-21e7-4ebb-8936-cf23fbec29d9.png"
                                roundedCircle
                            />
                        </Col>
                        <Col sm="1">
                            <h5 style={{ fontWeight: "bold" }}>Target</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
                <Row
                    style={{
                        borderBottom: "1px solid #E8E9EB",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                                roundedCircle
                            />
                        </Col>
                        <Col style={{ textAlign: 'left' }}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/235/c6dee5a3-afe8-4e60-9156-1a02a79fc72d.jpg"
                                roundedCircle
                            />
                        </Col>
                        <Col style={{ textAlign: 'left' }}>
                            <h5 style={{ fontWeight: "bold" }}>Stop & Shop</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }}
                                src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/648/e1c282e5-21e7-4ebb-8936-cf23fbec29d9.png"
                                roundedCircle
                            />
                        </Col>
                        <Col sm="1">
                            <h5 style={{ fontWeight: "bold" }}>Target</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
}

export default Listings