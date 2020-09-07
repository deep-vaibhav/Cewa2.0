import React from "react";

import "./Home.scss";

import Vision from "./Vision/Vision";
import NewsAndBLog from "./NewsAndBlog/NewsAndBlog";
import CarouselDisplay from "./CarouselDisplay/CarouselDisplay";
import Counter from "./Counter/Counter";

const Home = (props) => {
  return (
    <div className="Home">
      <CarouselDisplay />
      <Counter />
      <Vision />
      
    </div>
  );
};
export default Home;
