import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <Container
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <div className="contact-div">
                    <div className="contactDivCol">
                        <h3>
                            Are you looking for{" "}
                            <strong> VISA Applications</strong>? Contact us.{" "}
                        </h3>
                        <h6>
                            Need consultation? Call us: 01711223344 or email:
                            lamisazamzam@gmail.com
                        </h6>
                    </div>
                    <div>
                        <Button className="contactBtn brandBtn">
                            Contact Us
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ marginLeft: "10px" }}
                            />
                        </Button>
                    </div>
                </div>
            </Container>
            <footer className="footer">
                <div className="text-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4qERDnuFM9cBrqRQdDv-fVwKcHHIQQ3lDQ&usqp=CAU"
                        alt="Globetrotter"
                        className="logo footerLogo"
                    />
                    <h2 className="footerAgencyName">Zamzam International</h2>
                    <p className="text-center agencySlogan">
                        Trusted Visa service agency
                    </p>
                </div>
                <hr style={{ color: "white" }} />
                <Row>
                    <Col md={3}>
                        <h4>Important Links</h4>
                        <ul>
                            <li>Coaching</li>
                            <li>Visa</li>
                            <li>Pricing</li>
                            <li>About</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Support</h4>
                        <ul>
                            <li>FAQ's</li>
                            <li>Privacy Policy</li>
                            <li>Terms and conditions</li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Contact Us</h4>
                        <ul>
                            <li>Location: Catalonia, Barcelona, Spain</li>
                            <li>Phone: 01711223344</li>
                            <li>Email: lamisazamzam@gmail.com</li>
                            <li>Work Hours: 24/7 available</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Subscribe to our Newsletter</h4>
                        <p>
                            {" "}
                            cumque minus, reiciendis facilis officia dolore
                            saepe alias aliquam.
                        </p>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            style={{ width: "200px", display: "inline" }}
                        />
                        <Button
                            style={{
                                display: "inline",
                                marginTop: "-7px",
                                marginLeft: "-5px",
                            }}
                            className="brandBtn"
                        >
                            >
                        </Button>
                    </Col>
                </Row>
                <p className="text-center mt-5">
                    <small>
                        Copyright © Lamisa Zamzam {new Date().getFullYear()},
                        all rights reserved.{" "}
                    </small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
