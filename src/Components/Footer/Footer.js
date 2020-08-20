import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


function Map() {

}

class Footer extends React.Component {

    render() {
        return (
            <Container fluid className="Footer">
                <Row className="FooterTop">
                    <Col className="PageLinks">
                        <h1>Pages</h1>
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Events</a>
                        <a href="#">Membership</a>
                    </Col>
                    <Col className="SocialMedia">
                        <h1>Social Media</h1>
                        <div className="Icons">
                        <a href="#">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a href="#"> 
                            
                        </a>
                        <a href="#">
                            
                        </a>
                        </div>
                    </Col>
                    <Col className="ContactForm">
                        <h1>get in touch</h1>
                        <form>
                            <label for="name">Name</label><br />
                            <input type="text" name="name"></input><br />

                            <label for="email">Email</label><br />
                            <input type="email" name="email"></input><br />

                            <label for="message">Message</label><br />
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