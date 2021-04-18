import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./News.css";
import newspaper from "../../../images/abolfazl-shaker-_u6CTQumae4-unsplash.jpg";
import tourist from "../../../images/priscilla-du-preez-7etIYqqw2jU-unsplash.jpg";

const News = () => {
    return (
        <section className="newsSection">
            <Container>
                <Row>
                    <Col md={10}>
                        <h2 className="title">Recent News About Visa</h2>
                    </Col>
                    <Col md={2}>
                        <Button>View All</Button>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    <Col md={6} className="newsColumn">
                        <img src={newspaper} alt="" />
                        <div className="mt-4">
                            <h6>Business Visa</h6>
                            <h4>Various versions have evolved over years</h4>
                            <p>
                                There are different types of business visa.
                                Entrepreneur is a prominent version and an easy
                                one.
                            </p>
                            <p><small>12/04/2021</small></p>
                            <Button>Continue Reading</Button>
                        </div>
                    </Col>
                    <Col md={6} className="newsColumn">
                        <img src={tourist} alt="" />
                        <div className="mt-5">
                            <h6>Tourist Visa</h6>
                            <h4>
                                Words which didn't look a slightly believable
                            </h4>
                            <p>
                                Now tourist is everywhere. Just before 100
                                years, it wasn't that easy. Nowadays, it's easy
                                to get
                            </p>
                            <p><small>15/04/2021</small></p>
                            <Button>Continue Reading</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default News;
