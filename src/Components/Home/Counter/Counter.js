import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './Counter.scss';

class Counter extends React.Component {
    render() {
        return (
            <Container fluid className="counter">
                <Row>
                    <Col className="counter_item">
                        <h1>50+</h1>
                        <p>districts served</p>
                    </Col>
                    <Col className="counter_item">
                        <h1>1000+</h1>
                        <p>lives changed</p>
                    </Col>
                    <Col className="counter_item">
                        <h1>100+</h1>
                        <p>team members</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Counter;