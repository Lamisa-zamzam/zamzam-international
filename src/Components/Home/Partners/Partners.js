import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Partners.css";

const Partners = () => {
    return (
        <section className="partnersSection">
            <h1 className="text-center">Our Trusted Partners</h1>
            <Container>
                <Row>
                    <Col md={3}><h6>Nomant</h6></Col>
                    <Col md={3}><h6>Wavebank</h6></Col>
                    <Col md={3}><h6>Allergan</h6></Col>
                    <Col md={3}><h6>Bussinex</h6></Col>
                </Row>
                <Row>
                    <Col md={3}><h6>eyeota</h6></Col>
                    <Col md={3}><h6>BOLD</h6></Col>
                    <Col md={3}><h6>Bento</h6></Col>
                    <Col md={3}><h6>Travel</h6></Col>
                </Row>
                <Row>
                    <Col md={3}><h6>Energy</h6></Col>
                    <Col md={3}><h6>Global</h6></Col>
                    <Col md={3}><h6>Express</h6></Col>
                    <Col md={3}><h6>ConsuVisa</h6></Col>
                </Row>
                <Row>
                    <Col md={3}><h6>Vilieega</h6></Col>
                    <Col md={3}><h6>Leollages</h6></Col>
                    <Col md={3}><h6>Orilual Visa</h6></Col>
                    <Col md={3}><h6>Kyrianuls</h6></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Partners;