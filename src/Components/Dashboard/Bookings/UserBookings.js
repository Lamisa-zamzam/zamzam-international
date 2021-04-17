import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const UserBookings = ({ order }) => {
    const { name, email, serviceName, payedWith, status, _id } = order;
    const [chosenService, setChosenService] = useState({});
    const { detail, imageURL, price } = chosenService;
    console.log(detail, imageURL, price);

    console.log(chosenService);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceName}`)
            .then((res) => res.json())
            .then((data) => setChosenService(data[0]));
    }, [serviceName]);

    return (
        <Col
        md={6}
            style={{
                boxShadow: "5px 5px 10px gray",
                borderRadius: "5px",
                padding: "1%",
                marginTop: "3%",
                marginLeft: "20%",
                border: "1px solid gray",
            }}
        >
            <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                <img
                    src={imageURL}
                    alt=""
                    style={{ width: "80%", borderRadius: "100%" }}
                />
                <h2
                    style={{
                        marginLeft: "40%",
                        color:
                            status === "pending"
                                ? "red"
                                : status === "done"
                                ? "green"
                                : "orange",
                    }}
                >
                    <strong>{status}</strong>
                </h2>
            </div>
            <h3>{serviceName}</h3>
            <p>{detail}</p>
        </Col>
    );
};

export default UserBookings;
