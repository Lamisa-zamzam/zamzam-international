import React from "react";
import Header from "../Header/Header";
import Steps from "../Steps/Steps";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import Strategies from "../Strategies/Strategies";

const Home = () => {
    return (
        <div>
            <Header />
            <Steps></Steps>
            <Services />
            <Strategies />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;
