import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

import "./ContactUs.scss";
import contactImg from "../../../src/Assets/image/contact.svg";
import fb from "../../../src/Assets/image/fb.svg";
import insta from "../../../src/Assets/image/insta.svg";
import twt from "../../../src/Assets/image/twitter.svg";
import address from "../../../src/Assets/image/address.svg";
import phone from "../../../src/Assets/image/phone.svg";
import email from "../../../src/Assets/image/email.svg";
import Map from "../Map/Map";

class ContactUs extends React.Component {
  render() {
    return (
      <div className="contactus">
        <div className="contactus_container">
          <div className="contactImg">
            <img src={contactImg}></img>
          </div>
          <div>
            <div className="contact-details">
              <div className="details">
                <img src={address}></img>
                <p>653/A, Naiyyar Colony, Gonda pin - 271001</p>
              </div>
              <div className="details">
                <img src={phone}></img>
                <a href="tel:9870233978">
                  <p>+91 9870233978</p>
                </a>
              </div>
              <div className="details">
                <img src={email}></img>
                <p>ngocewa@gmail.com</p>
              </div>
              <div className="social">
                <p>Follow us:</p>
                <div className="icons">
                  <motion.a
                    href="https://www.facebook.com/cewa.ngo.37?epa=SEARCH_BOX"
                    target="_blank_"
                    whileHover={{ scale: 1.2 }}
                  >
                    <img src={fb}></img>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/_cewa_foundation_/"
                    target="_blank_"
                    whileHover={{ scale: 1.2 }}
                  >
                    <img src={insta} className="insta"></img>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/NgoCewa"
                    target="_blank_"
                    whileHover={{ scale: 1.2 }}
                  >
                    <img src={twt}></img>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
