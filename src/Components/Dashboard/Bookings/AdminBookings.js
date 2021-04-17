import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const AdminBookings = ({order, handleStatusChange}) => {
    return (
        <Row>
        <Col md={2}>
            <p className="colP">{order.name}</p>
        </Col>
        <Col md={2}>
            <p className="colP">{order.email}</p>
        </Col>
        <Col md={1}></Col>
        <Col md={2}>
            <p className="colP">{order.serviceName}</p>
        </Col>
        <Col md={2}>
            <p className="colP">{order.payedWith}</p>
        </Col>
        <Col md={2} className="statusCol">
            {" "}
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control
                    as="select"
                    onChange={(event) =>
                        handleStatusChange(event, order._id)
                    }
                >
                    <option>{order.status}</option>
                    <option>
                        {order.status !== "ongoing"
                            ? "ongoing"
                            : "pending"}
                    </option>
                    <option>
                        {order.status !== "done"
                            ? "done"
                            : "pending"}
                    </option>
                </Form.Control>
            </Form.Group>
        </Col>
        <hr />
    </Row>
    );
};

export default AdminBookings;