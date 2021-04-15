import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import businessman from "../../../images/bruce-mars-xj8qrWvuOEs-unsplash.jpg";
import family from "../../../images/nathan-dumlao-Wr3comVZJxU-unsplash.jpg";
import tourist from "../../../images/ibrahim-rifath-Y6tBl0pTe-g-unsplash.jpg";
import "./Services.css";

const Services = () => {
    return (
        <section className="serviceSection">
            <h2 className="text-center text-white mt-5 mb-4">Different Visa services</h2>

            <Container>
                <Row className="g-3 mb-3">
                    <Col md={4}>
                        <Card className="card">
                            <Card.Img variant="top" src={businessman} />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Business Visa
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card">
                            <Card.Img variant="top" src={family} />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Family Visa
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card">
                            <Card.Img variant="top" src={tourist} />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Tourist Visa
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className="card">
                            <Card.Img
                                variant="top"
                                src="../../../images/nathan-dumlao-Wr3comVZJxU-unsplash.jpg"
                            />
                            <Card.Body>
                                <Card.Title className="text-center"></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card">
                            <Card.Img
                                variant="top"
                                src="../../../images/ibrahim-rifath-Y6tBl0pTe-g-unsplash.jpg"
                            />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Card Title
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card">
                            <Card.Img
                                variant="top"
                                src="../../../images/dan-dealmeida-MJZz3uthfXA-unsplash.jpg"
                            />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Card Title
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;
