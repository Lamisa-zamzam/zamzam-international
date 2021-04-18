import React from "react";
import { Col } from "react-bootstrap";

const Review = (props) => {
    const { feedback, imgURL, name, profession } = props.review;
    return (
        <Col md={4}>
            <div className="review">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mVzSdnsycnZDeEuCLUchahymdMeS3GEU4Q&usqp=CAU"
                    alt=""
                    className="quote"
                />
                <p>{feedback}</p>
                <h5>{name}</h5>
                <small>{profession}</small>
                <br />
                <br />
                <img src={imgURL} className="customer" alt="" />
            </div>
        </Col>
    );
};

export default Review;
