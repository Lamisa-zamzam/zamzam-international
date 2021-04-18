import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Reviews.css";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://morning-shelf-52119.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    return (
        <section>
            <h2 className="text-center heading mb-5">
                What customers say about us
            </h2>
            <div className="d-flex align-items-center"></div>
            <Container className="reviewContainer">
                <Row>{reviews.map(review => <Review key={review._id} review={review}/>)}</Row>
            </Container>
        </section>
    );
};

export default Reviews;
