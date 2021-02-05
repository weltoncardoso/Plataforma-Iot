import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io';

export default function Cadastro() {
    return (
        <Container>
            <Link to="/">
                <Button variant="light"><IoMdArrowRoundBack size={30}/></Button>
            </Link>
            <Row>
                <Col>

                </Col>
                <Col >
                    
                </Col>
            </Row>
        </Container>
    )
}