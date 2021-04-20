import React from "react";
import Footer from "../SharedFolder/Footer/Footer";
import Header from "./Header/Header";
import HowWeWork from "./HowWeWork/HowWeWork";
import Review from "./Review/Review";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Header></Header>
      <HowWeWork></HowWeWork>
      <Services></Services>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
