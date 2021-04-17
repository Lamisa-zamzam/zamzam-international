import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import AdminBookings from "./AdminBookings";
import "./Bookings.css";
import UserBookings from "./UserBookings";

const Bookings = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const loggedInEmail = sessionStorage.getItem("email");
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/checkIfAdmin?email=${loggedInEmail}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    setIsAdmin(true);
                }
            });
    }, [loggedInEmail]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${loggedInEmail}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [loggedInEmail]);

    const handleStatusChange = (e, id) => {
        const newStatus = { status: e.target.value };

        fetch(`http://localhost:5000/updateOrder/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(newStatus),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    };

    return (
        <div className="allBookingsDiv">
            <Sidebar />
            <Container className="bookingsContainer">
                {isAdmin && (
                    <Row className="headerRow">
                        <Col md={2}>Name</Col>
                        <Col md={3}>Email</Col>
                        <Col md={2}>Service</Col>
                        <Col md={3}>Payed With</Col>
                        <Col md={2}>Status</Col>
                    </Row>
                )}
                {isAdmin &&
                    orders.map((order) => (
                        <AdminBookings
                            key={order._id}
                            order={order}
                            handleStatusChange={handleStatusChange}
                        />
                    ))}
                {!isAdmin &&
                    orders.map((order) => (
                        <Row>
                            <UserBookings order={order} key={order._id} />
                        </Row>
                    ))}
            </Container>
        </div>
    );
};

export default Bookings;
