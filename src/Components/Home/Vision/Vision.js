import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Vision.scss";

import img from '../../../Assets/image/vision.jpg';
import img2 from '../../../Assets/image/driveImg.jpg';
import quote from '../../../Assets/image/quote.png';

import TweenLite from 'gsap';
import ScrollTrigger from 'gsap';
import gsap from 'gsap';
import { _sortPropTweensByPriority } from "gsap/gsap-core";

class Vision extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.OurVision = null;
        this.myTween = null;
    }

    componentDidMount() {
       
    }


    render() {
        return (
            <Container fluid className="Vis">
                <Row className="vision-text">
                    <Col md className="vision-img">
                        <img src={img} alt="img"></img>
                    </Col>
                    <Col md className="vision-body">
                        <h2 ref={div => this.OurVision = div}> Our Vision</h2>
                        <p>
                        To work for the betterment of the underprivileged children so that
                        they can enlighten the future of the world’s largest Democracy.
                        <br />
                        <br />
                        We’ll provide all kind of help/support to children's who somehow are
                        not able to manage the school fees as well as the basic needs
                        required for a Secondary Student.
                        <br />
                        Will also carry out various child development projects to provide
                        opportunities for the proper development of children. To mentor and
                        provide guidance to the youth. To safeguard the rights of the child
                        and provide for the well being of children in need, more
                        particularly, Children deprived of education, Children suffering
                        from ill health, physical and mental, Children exposed to any form
                        of abuse.
                        </p>
                    </Col> 
                </Row>

                <Row className="quote">
                    <img src={quote}></img>
                    <p className="quote-p">Let the entire world be happy</p>
                </Row>

                <Row className="whatDrivesUs">
                    <Col md className="col1">
                        <h1>What drives us?</h1>
                        <ul>
                            <li>In a country with a population of more than 1.3 billion, 1/3rd of them starve for their daily bread and hold the largest share of the world’s extreme poor. </li>
                            <li>Additionally, India records a burgeon in malnutrition cases despite the booming economy as per the authorities. </li>
                            <li>Due to fiscal needs or any supplementary reason, 3.9% of the total child population are working as main workers. </li>
                            <li>Intertwined to child labor, more than 42.7 million children in India are out of school, further abating the literacy rate.</li>
                        </ul>
                        <p>
                        There’s no doubt that India’s at-risk children from the lower sections are to be rescued from these chains, holding them back from a promising future. This is what motivates us to further spread our reach and bestow our serviceability. 
                        We yearn for a more influential society free from all forms of exploitation and discrimination, where everyone has equal opportunities to perceive their potential. 
                        </p>
                    </Col>
                    <Col md className="col2">
                        <img src={img2}></img>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Vision;