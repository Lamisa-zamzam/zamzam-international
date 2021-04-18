import React from "react";
import Header from "../Header/Header";
import Steps from "../Steps/Steps";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import Strategies from "../Strategies/Strategies";
import News from "../News/News";
import Partners from "../Partners/Partners";

const Home = () => {
    return (
        <div>
            <Header />
            <Steps />
            <Services />
            <Strategies />
            <Reviews />
            <News />
            <Partners />
            <Footer />
        </div>
    );
};

export default Home;
