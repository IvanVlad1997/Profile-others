import React from 'react'
import './CV.css'
import {Container, Row, Col} from 'react-bootstrap'

const CV = () => {
    return (
        <Container>
            <Row>
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>
      </Container>
    )
}

export default CV
