import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logan from "../../../images/logan-weaver-p0B7ueoZz8E-unsplash.jpg";
import "./Reviews.css";

const Review = () => {
    return (
        <section>
            <h2 className="text-center heading mb-5">
                What customers say about us
            </h2>
            <div className="d-flex align-items-center"></div>
            <Container className="reviewContainer">
                <Row>
                    <Col md={4}>
                        <div className="review">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mVzSdnsycnZDeEuCLUchahymdMeS3GEU4Q&usqp=CAU"
                                alt=""
                                className="quote"
                            />
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Optio velit soluta aspernatur
                                eveniet impedit, excepturi in voluptates
                                adipisci laboriosam hic! Alias, veniam tenetur?
                                At iste placeat, sint sequi perferendis commodi!
                            </p>
                            <h5>John Doe</h5>
                            <small>SEO, Google</small>
                            <br />
                            <br />
                            <img src={Logan} className="customer" alt="" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="review">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mVzSdnsycnZDeEuCLUchahymdMeS3GEU4Q&usqp=CAU"
                                alt=""
                                className="quote"
                            />
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Optio velit soluta aspernatur
                                eveniet impedit, excepturi in voluptates
                                adipisci laboriosam hic! Alias, veniam tenetur?
                                At iste placeat, sint sequi perferendis commodi!
                            </p>
                            <h5>John Doe</h5>
                            <small>SEO, Google</small>
                            <br />
                            <br />
                            <img src={Logan} className="customer" alt="" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="review">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mVzSdnsycnZDeEuCLUchahymdMeS3GEU4Q&usqp=CAU"
                                alt=""
                                className="quote"
                            />
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Optio velit soluta aspernatur
                                eveniet impedit, excepturi in voluptates
                                adipisci laboriosam hic! Alias, veniam tenetur?
                                At iste placeat, sint sequi perferendis commodi!
                            </p>
                            <h5>John Doe</h5>
                            <small>SEO, Google</small>
                            <br />
                            <br />
                            <img src={Logan} className="customer" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Review;
