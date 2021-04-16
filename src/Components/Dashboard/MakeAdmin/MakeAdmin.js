import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../AddService/AddService.css";

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const { email } = data;
        const admin = { email };

        fetch("http://localhost:5000/makeAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(admin),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    };

    return (
        <div className="addServiceContainer">
            <Sidebar />
            <div className="serviceAddingFormContainer">
                <h3 className="dashboardTitle">Make an Admin</h3>
                <br />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Enter Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="e.g. johndoe@gmail.com"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="error">Email is required</span>
                        )}
                    </Form.Group>
                    <br/>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Add Admin
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default MakeAdmin;
