import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "../SimpleCardForm/SimpleCardForm";
const stripePromise = loadStripe(
    "pk_test_51IeJOnEbOwJYaM8zeiKuT8tF911nK1hHgA9uH77BP8Atf5XymHXR3XIlI8w8QIv5P19rA3Li3bfz15bVuK0aw9dF00MnyVJpef"
);

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm />
        </Elements>
    );
};

export default Payment;
