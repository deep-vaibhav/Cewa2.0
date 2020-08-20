import React from "react";

import "./Home.scss";

import Vision from "./Vision/Vision";
import NewsAndBLog from "./NewsAndBlog/NewsAndBlog";
import CarouselDisplay from "./CarouselDisplay/CarouselDisplay";

const Home = (props) => {
  return (
    <div className="Home">
      <CarouselDisplay />
      <Vision />
      
    </div>
  );
};
export default Home;
