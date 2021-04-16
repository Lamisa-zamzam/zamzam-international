import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
    const { _id, detail, price, serviceName, imageURL } = props.service;
    return (
        <Col md={4}>
            <div className="serviceContainer">
                <Link to={`/dashboard/book/${_id}`} className="">
                    <Card className="card">
                        <Card.Img variant="top" src={imageURL} />
                        <Card.Body>
                            <Card.Title className="text-center">
                                {serviceName}
                            </Card.Title>
                            <h6>{price}</h6>
                            <Card.Text>{detail}</Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </Col>
    );
};

export default Service;
