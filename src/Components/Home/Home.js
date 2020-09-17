import React from "react";

import "./Home.scss";

import Vision from "./Vision/Vision";
import NewsAndBLog from "./NewsAndBlog/NewsAndBlog";
import CarouselDisplay from "./CarouselDisplay/CarouselDisplay";
import Counter from "./Counter/Counter";
import Testimonial from "./Testimonial/Testimonial";

const Home = (props) => {
  return (
    <div className="Home">
      <CarouselDisplay />
      <Counter />
      <Vision />
      <Testimonial />
      <NewsAndBLog />
    </div>
  );
};
export default Home;
