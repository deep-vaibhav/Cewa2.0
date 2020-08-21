import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleMap from "../Map/Map";

import './ContactUs.scss';


class ContactUs extends React.Component {
    render() {
        return (
            <Container fluid className="contactus">
                <Row>
                    <Col>
                        <GoogleMap />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactUs;