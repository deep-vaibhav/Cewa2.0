import React, { useRef, useEffect} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./CarouselDisplay.scss";
import img from "../../../../src/Assets/image/vision_img.jpg";


function AnimateHero() {
    let container = useRef(null);
    let image = useRef(null);
}

class CarouselDisplay extends React.Component {

    render() {
        return (
            <Container fluid className="Display">
                <Row className="img_container">
                    <img src={img}></img>
                    
                    <div className="BannerText">
                        <h1>"We are the future"</h1>
                        <p>There can be no keener revelation of a society's soul than the way in which it treats its children</p>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default CarouselDisplay;
