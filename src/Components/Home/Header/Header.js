import React from "react";
import { Button, Container } from "react-bootstrap";
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
                <Button className="mainButton">Get Started</Button>
                <Button className="mainButton">Contact Us</Button>
            </Container>
            </div>
        </div>
    );
};

export default Header;
