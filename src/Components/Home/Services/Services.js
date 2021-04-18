import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://morning-shelf-52119.herokuapp.com/services")
            .then((res) => res.json())
            .then((result) => {
                setServices(result);
            });
    }, []);

    return (
        <section className="serviceSection">
            <h2 className="text-center text-white mt-5 mb-4">
                Different Visa services
            </h2>

            <Container>
                <Row className="g-3 mb-3">{
                    services.map(service => <Service key={service._id} service={service}/>)
                }</Row>
            </Container>
        </section>
    );
};

export default Services;
