import React, { useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "../AddService/AddService.css";
import { Form, Button } from "react-bootstrap";

const GiveReview = () => {
    const imgURL = sessionStorage.getItem("photo");
    const name = sessionStorage.getItem("name");
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const { name, profession, feedback } = data;
        const review = { name, profession, feedback, imgURL };

        fetch("https://morning-shelf-52119.herokuapp.com/giveReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result){
                    alert("Your review has been submitted successfully!! Thanks for your feedback to make us work better for you.");
                    window.location.reload();
                }
            });
    };

    return (
        <div className="addServiceContainer">
            <Sidebar />
            <div className="serviceAddingFormContainer">
                <h3 className="dashboardTitle">Give us a review</h3>
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
                        <Form.Label>
                            Your Company's Name and designation
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Company and designation"
                            {...register("profession", { required: true })}
                        />
                        {errors.price && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Feedback</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            {...register("feedback", { required: true })}
                            placeholder="Review"
                        />
                        {errors.price && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default GiveReview;
