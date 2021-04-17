import React, { createContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import "./Book.css";
import "../../AddService/AddService.css";
import { Link } from "react-router-dom";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export const OrderContext = createContext();

const Book = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const { id } = useParams();
    const [chosenService, setChosenService] = useState({});
    const [paymentId, setPaymentId] = useState(null);
    const [paymentBrand, setPaymentBrand] = useState(null);
    const [cardLastFour, setCardLastFour] = useState(null);
    const [cardExpireMonth, setCardExpireMonth] = useState(null);
    const [cardExpireYear, setCardExpireYear] = useState(null);
    const [payedWith, setPayedWith] = useState(null);
    const { serviceName, _id, price } = chosenService;
    const history = useHistory();
    const [error, setError] = useState(null);
    const email = sessionStorage.getItem("email");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const name = sessionStorage.getItem("name");

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then((res) => res.json())
            .then((data) => setChosenService(data[0]));
    }, [id]);

    const handlePaymentSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
            console.log("[error]", error);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            console.log("[PaymentMethod]", paymentMethod);
            const { id } = paymentMethod;
            const { brand } = paymentMethod.card;
            const { exp_month } = paymentMethod.card;
            const { exp_year } = paymentMethod.card;
            const { last4 } = paymentMethod.card;
            const { funding } = paymentMethod.card;
            setPaymentId(id);
            setPaymentBrand(brand);
            setCardExpireMonth(exp_month);
            setCardExpireYear(exp_year);
            setCardLastFour(last4);
            setPayedWith(funding);
        }
    };

    const onSubmit = (data) => {
        console.log(data);
        const { name, email } = data;
        const date = new Date();
        const orderDetail = {
            name,
            email,
            serviceName,
            price,
            paymentId,
            paymentBrand,
            cardLastFour,
            cardExpireMonth,
            cardExpireYear,
            date,
            payedWith,
            status: "pending",
        };

        console.log(orderDetail);
        fetch("http://localhost:5000/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderDetail),
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    alert(
                        "Your visa order placed successfully!! Thank you for depending on us."
                    );
                    history.push("/");
                }
            });
    };

    return (
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
                            {...register("visaName")}
                            defaultValue={serviceName}
                            disabled
                        />
                        {errors.visaName && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <br />
                    <br />
                    {paymentSuccess ? (
                        <Button
                            variant="primary"
                            type="submit"
                            className="formSubmitButton"
                        >
                            Order Visa
                        </Button>
                    ) : (
                        <p>
                            Your will be ready to submit this form once your
                            payment is successful.
                        </p>
                    )}
                </Form>
                <h5>
                    Your service charge will be <strong>{price}</strong>
                </h5>
                <br />
                <form
                    onSubmit={handlePaymentSubmit}
                    style={{
                        border: "2px solid rgba(210, 215, 211, 1)",
                        padding: "4%",
                        borderRadius: "5px",
                        marginBottom: "15%",
                    }}
                >
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                    <br />
                    <br />
                    <Button type="submit" disabled={!stripe}>
                        Confirm Payment
                    </Button>
                    <br />
                    <br />
                    {paymentError && (
                        <p style={{ color: "red" }}>{paymentError}</p>
                    )}
                    {paymentSuccess && (
                        <p style={{ color: "green" }}>
                            Your payment was successful
                        </p>
                    )}
                </form>
                <p className="text-center">
                    <Link to="/">Want a different visa? </Link>
                </p>
            </div>
        </div>
    );
};

export default Book;