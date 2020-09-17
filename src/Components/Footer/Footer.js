import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.scss";

// function Map() {

// }

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="Footer">
        <Row className="FooterTop">
          <Col className="PageLinks">
            <h1>Pages</h1>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Events</a>
            <a href="">Membership</a>
          </Col>
          <Col className="SocialMedia">
            <h1>Social Media</h1>
            <ul className="SMlinks">
              <li>
                <a
                  href="https://www.facebook.com/cewa.ngo.37?epa=SEARCH_BOX"
                  target="_blank_"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_cewa_foundation_/"
                  target="_blank_"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/NgoCewa" target="_blank_">
                  Twitter
                </a>
              </li>
            </ul>
          </Col>
          <Col className="ContactForm">
            <h1>get in touch</h1>
            <form>
              <label for="name">Name</label>
              <br />
              <input type="text" name="name"></input>
              <br />

              <label for="email">Email</label>
              <br />
              <input type="email" name="email"></input>
              <br />

              <label for="message">Message</label>
              <br />
              <textarea></textarea>

              <button>SEND</button>
            </form>
          </Col>
        </Row>
        <Row className="FooterBottom">
          <p>All Rights Reserved. Copyright © 2020 Cewa Organisation.</p>
        </Row>
      </Container>
    );
  }
}

export default Footer;
