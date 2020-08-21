import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleMap from "../Map/Map";


class ContactUs extends React.Component {
    render() {
        return (
            <Container>
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