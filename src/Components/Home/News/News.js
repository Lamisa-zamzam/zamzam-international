import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./News.css";
import newspaper from "../../../images/abolfazl-shaker-_u6CTQumae4-unsplash.jpg";
import tourist from "../../../images/priscilla-du-preez-7etIYqqw2jU-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const News = () => {
    return (
        <section className="newsSection">
            <Container>
                <Row>
                    <Col md={10}>
                        <h2 className="title">Recent News About Visa</h2>
                    </Col>
                    <Col md={2}>
                        <Button className="brandBtn">
                            View All
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ marginLeft: "10px" }}
                            />
                        </Button>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    <Col md={6} className="newsColumn">
                        <img src={newspaper} alt="" />
                        <div className="mt-4">
                            <h6 className="title">Business Visa</h6>
                            <h4>Various versions have evolved over years</h4>
                            <p>
                                There are different types of business visa.
                                Entrepreneur is a prominent version and an easy
                                one.
                            </p>
                            <p style={{ color: "goldenrod" }}>12/04/2021</p>
                            <Button className="brandBtn">
                                Continue Reading
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ marginLeft: "10px" }}
                                />
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="newsColumn">
                        <img src={tourist} alt="" />
                        <div className="mt-5">
                            <h6 className="title">Tourist Visa</h6>
                            <h4>
                                Words which didn't look a slightly believable
                            </h4>
                            <p>
                                Now tourist is everywhere. Just before 100
                                years, it wasn't that easy. Nowadays, it's easy
                                to get
                            </p>
                            <p style={{ color: "goldenrod" }}>15/04/2021</p>
                            <Button className="brandBtn">
                                Continue Reading
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ marginLeft: "10px" }}
                                />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default News;
