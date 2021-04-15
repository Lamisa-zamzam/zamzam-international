import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import experts from "../../../images/2021-04-15 (42).png";
import "./Strategies.css";

const Strategies = () => {
    return (
        <section className="strategySection">
            <Container>
                <div className="strategyRow">
                    <Row>
                        <Col md={6} className="strategy-column">
                            <img src={experts} alt="" className="experts" />
                        </Col>
                        <Col md={6} className="strategy-column strategies">
                            <h6 style={{ color: "orangered" }}>
                                Why Choose Us
                            </h6>
                            <h2 style={{ color: "green" }}>
                                We provide experts to create great values for
                                your visa
                            </h2>
                            <div>
                                <div className="strategy">
                                    <h5>Real Time Status</h5>
                                    <p>
                                        By dealing with data, select tools that
                                        help you automate time-consuming
                                        processes
                                    </p>
                                </div>
                                <div className="strategy">
                                    <h5>Experienced Team</h5>
                                    <p>
                                        Our Team is well-trained, organized and
                                        experienced.{" "}
                                    </p>
                                </div>
                                <div className="strategy">
                                    <h5>Live Chat with Experts</h5>
                                    <p>
                                        You can chat with our team anytime you
                                        want.
                                    </p>
                                </div>
                                <div className="strategy">
                                    <h5>Fast Processing Guarantee</h5>
                                    <p>
                                        We guarantee you to process your visa
                                        within Two months.
                                    </p>
                                </div>
                                <div className="strategy">
                                    <h5>Strategical Outline</h5>
                                    <p>
                                        We make unique outline for every
                                        customer and drive them accordingly.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Strategies;
