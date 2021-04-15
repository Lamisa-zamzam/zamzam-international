import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Steps.css";

const Steps = () => {
    return (
        <Container>
            <Row>
                <Col md={3} className="step">
                    <h6>Step: 1</h6> <h5>Apply Online</h5>
                    <p>Apply for your immigration online</p>
                </Col>
                <Col md={3} className="step">
                    <h6>Step: 2</h6>
                    <h5>Submit Documents</h5>
                    <p>Submit Documents necessary for your Visa </p>
                </Col>
                <Col md={3} className="step">
                    <h6>Step: 3</h6> <h5>Receive Visa</h5>
                    <p> Receive your Visa within two months</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Steps;
