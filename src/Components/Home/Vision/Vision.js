import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Vision.scss";

import img from "../../../Assets/image/vision.jpg";
import img2 from "../../../Assets/image/driveimg.jpg";
import quote from "../../../Assets/image/quote.png";

import { motion } from "framer-motion";

class Vision extends React.Component {
  constructor(props) {
    super(props);

    this.visText = null;
  }

  render() {
    return (
      <div className="Vis">
        <div className="vision-text">
          <div className="vision-img">
            <img src={img} alt="img"></img>
          </div>
          <div className="vision-body">
            <motion.h2 className="vis-text" animate={{}}>
              Our Vision
            </motion.h2>
            <p>
              To work for the betterment of the underprivileged children so that
              they can enlighten the future of the world’s largest Democracy.
              <br />
              <br />
              We’ll provide all kind of help/support to children's who somehow
              are not able to manage the school fees as well as the basic needs
              required for a Secondary Student.
              <br />
              Will also carry out various child development projects to provide
              opportunities for the proper development of children. To mentor
              and provide guidance to the youth. To safeguard the rights of the
              child and provide for the well being of children in need, more
              particularly, Children deprived of education, Children suffering
              from ill health, physical and mental, Children exposed to any form
              of abuse.
            </p>
          </div>
        </div>

        <div className="quote">
          <img src={quote}></img>
          <p className="quote-p">Let the entire world be happy</p>
        </div>

        <div className="whatDrivesUs">
          <div className="col1">
            <h1>What drives us?</h1>
            <ul>
              <li>
                In a country with a population of more than 1.3 billion, 1/3rd
                of them starve for their daily bread and hold the largest share
                of the world’s extreme poor.{" "}
              </li>
              <li>
                Additionally, India records a burgeon in malnutrition cases
                despite the booming economy as per the authorities.{" "}
              </li>
              <li>
                Due to fiscal needs or any supplementary reason, 3.9% of the
                total child population are working as main workers.{" "}
              </li>
              <li>
                Intertwined to child labor, more than 42.7 million children in
                India are out of school, further abating the literacy rate.
              </li>
            </ul>
            <p>
              There’s no doubt that India’s at-risk children from the lower
              sections are to be rescued from these chains, holding them back
              from a promising future. This is what motivates us to further
              spread our reach and bestow our serviceability. We yearn for a
              more influential society free from all forms of exploitation and
              discrimination, where everyone has equal opportunities to perceive
              their potential.
            </p>
          </div>
          <div className="col2">
            <img src={img2}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Vision;
