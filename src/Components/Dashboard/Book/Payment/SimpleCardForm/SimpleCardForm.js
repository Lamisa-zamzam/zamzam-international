import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { OrderContext } from "../../Book/Book";

const SimpleCardForm = () => {
    const hello = useContext(OrderContext);
    console.log(hello);

    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const handleSubmit = async (event) => {
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
            const {brand} = paymentMethod.card;
        }
    };

    return (
        <Container>
            <form
                onSubmit={handleSubmit}
                style={{
                    border: "2px solid rgba(210, 215, 211, 1)",
                    padding: "4%",
                    borderRadius: "5px",
                    marginTop: "5%"
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
                {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
                {paymentSuccess && (
                    <p style={{ color: "green" }}>
                        Your payment was successful
                    </p>
                )}
            </form>
        </Container>
    );
};

export default SimpleCardForm;
