import React, { useRef, useEffect} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./CarouselDisplay.scss";
import img from "../../../../src/Assets/image/vision_img2.png";

import TweenLite from 'gsap';

class CarouselDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.headerText = null;
        this.paraText = null;
        this.buttonEl = null;
        this.myTween = null;
    }

    componentDidMount() {
        this.myTween = TweenLite.to(this.headerText, 1, {opacity: 1, y: -20});
        this.myTween = TweenLite.to(this.paraText, 1.5, {opacity: 1, y: -20});
        this.myTween = TweenLite.to(this.buttonEl, 2, {opacity: 1, y: -20});
    }

    render() {
        return (
            <Container fluid className="Display">
                <Row className="img_container">
                    <img src={img}></img>
                    
                    <div className="BannerText">
                        <h1 ref={div => this.headerText = div}>We are the future</h1>
                        <p ref={div => this.paraText = div}>Every child deserves a chance at life, the right to follow their dreams, an opportunity to embrace their potential, and some humanity, and care. Therefore, every child must be treated fair. If we stand up for the impoverished children, we stand for a better society, a better tomorrow, and a brighter future.</p>
                        <button ref={div => this.buttonEl = div}>EXPLORE</button>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default CarouselDisplay;
