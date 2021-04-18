import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "../../Shared/MyNavbar/MyNavbar";
import "./Header.css";

const Header = () => {
    return (
        <div className="headerContainer">
            <MyNavbar />
            <div className="mainDiv">
                <Container className="mainContainer">
                    <h2>
                        Since 1980 We are the experts <br /> in Visa Industry
                    </h2>
                    <Link to="/dashboard/bookings">
                        <Button className="mainButton brandBtn">
                            Get Started
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ marginLeft: "10px" }}
                            />
                        </Button>
                    </Link>
                    <Button className="mainButton brandBtn">
                        Contact Us
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            style={{ marginLeft: "10px" }}
                        />
                    </Button>
                </Container>
            </div>
        </div>
    );
};

export default Header;
