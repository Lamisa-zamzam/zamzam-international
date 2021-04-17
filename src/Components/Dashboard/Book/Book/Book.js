import React, { createContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import "./Book.css";
import "../../AddService/AddService.css";
import Payment from "../Payment/Payment/Payment";
import { Link } from "react-router-dom";

export const OrderContext = createContext();

const Book = () => {
    const { id } = useParams();
    const [chosenService, setChosenService] = useState({});
    const [paymentId, setPaymentId] = useState(null);
    const [paymentBrand, setPaymentBrand] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then((res) => res.json())
            .then((data) => setChosenService(data));
    }, [id]);

    const { serviceName, _id, price } = chosenService;
    const history = useHistory();
    const [error, setError] = useState(null);
    const email = sessionStorage.getItem("email");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (event, data) => {
        event.preventDefault();
        console.log(data);
        // const { detail, price, serviceName } = data;
        // const service = { detail, price, serviceName };
    };

    const name = sessionStorage.getItem("name");

    return (
        <OrderContext.Provider value={[setPaymentId, setPaymentBrand]}>
            <div className="bookingFieldContainer addServiceContainer">
                <Sidebar />
                <div className="serviceAddingFormContainer">
                    <h3 className="dashboardTitle">Book Your Visa</h3>
                    <br />
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Name"
                                {...register("name", { required: true })}
                                defaultValue={name}
                            />
                            {errors.name && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. johndoe@gmail.com"
                                {...register("email", { required: true })}
                                defaultValue={email}
                            />
                            {errors.price && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>
                        <br />

                        <Form.Group>
                            <Form.Label>Visa you want to order</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="visa name"
                                {...register("visaName", { required: true })}
                                defaultValue={serviceName}
                            />
                            {errors.price && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                        </Form.Group>
                        <br />
                        <Button as={Link} to="/pay">
                            Pay for Visa
                        </Button>
                        <br />
                        <br />
                        <Button
                            variant="primary"
                            type="submit"
                            style={{ marginLeft: "80%" }}
                        >
                            Order Visa
                        </Button>
                        <br />
                        <br />
                    </Form>
                </div>
            </div>
        </OrderContext.Provider>
    );
};

export default Book;
