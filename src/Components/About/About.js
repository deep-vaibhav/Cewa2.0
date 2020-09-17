import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { motion } from "framer-motion";

import "./About.scss";
import img from "../../../src/Assets/image/image3.jpg";
import founder1 from "../../../src/Assets/image/prakhar.jpg";
import founder2 from "../../../src/Assets/image/harsha.jpg";

class About extends React.Component {
  render() {
    return (
      <Container fluid className="About">
        <Row>
          <Col className="aboutContent">
            <h1>Who we are</h1>
            <p>
              Children Endorse Welfare Association(CEWA) is a non-profit
              organization which focuses on the sustainable development of the
              underprivileged children. Our mission is to secure, protect and
              honor the rights of India’s children. We have designed our
              services to ensure that the children are safe and lead a dignified
              life. Our purpose is to ensure holistic growth and development of
              the children of the country, specially those belonging to the
              vulnerable sections of the society. We dream of building a
              brighter India by improving the condition of the future of the
              country – the children. We strive to make a difference in the
              lives of these children by protecting them and fulfilling their
              basic needs.
            </p>
          </Col>
          <Col className="aboutImg">
            <img src={img} alt="image"></img>
          </Col>
        </Row>

        <Row className="team-head">
          <h1>Our Team</h1>
        </Row>

        <Row className="team">
          <Col className="image">
            <img src={founder1} alt="founer"></img>
            <h3>Prakhar Pratap Singh</h3>
            <p>Founder</p>
          </Col>
          <Col>
            <img src={founder2} alt="founder2"></img>
            <h3>Harsha Rani</h3>
            <p>Founder</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
