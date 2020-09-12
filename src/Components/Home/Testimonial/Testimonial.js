import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import "./Testimonial.scss";
import image1 from "../../../../src/Assets/image/prakhar1.jpg";
import image2 from "../../../../src/Assets/image/harsha1.jpg";

class Testimonial extends React.Component {
    render() {
        return (
            <Container fluid className="test-cont">
                <h1>Founders speak</h1>
                <Carousel className="testimonial">
                    <Carousel.Item className="t-item">
                        <p className="test-quote">“I believe every child is entitled to equal rights, and those rights must be protected, regardless of where one is born. Because what matters is what they grow up to be.”</p>
                        <img
                        className="test-img"
                        src={image1}
                        />
                        
                        <h3>Prakhar Pratap Singh</h3>
                        <p>Founder, Cewa</p>
                        
                    </Carousel.Item>
                    <Carousel.Item className="t-item">
                        <p className="test-quote">“It is easier to mold the life of a naive child rather than a broken man. If a child is helped, he becomes helpful and grows to look beyond himself to the welfare of others."</p>
                        <img
                        className="test-img"
                        src={image2}
                        />

                        
                        <h3>Harsha Rani</h3>
                        <p>Founder, Cewa</p>
                        
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}

export default Testimonial;