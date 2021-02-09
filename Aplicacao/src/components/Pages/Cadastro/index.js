import React from 'react';
import { Container, Row, Col, Button, Jumbotron, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Cadastro() {
    return (
        <Container>
            <Row>
                <Link to="/">
                    <Button variant="light" style={{ marginBottom: '3%' }}><IoMdArrowRoundBack size={30} /></Button>
                </Link>
                <Col lg="12" style={{ alignItems: 'center', justifyContent: 'center', display:'flex', marginLeft:'25%' }}>
                    <Jumbotron >
                        <Form>
                            <Form.Group>
                                <Form.Row>
                                    <Col xs={7}>
                                        <Form.Control placeholder="primeiro" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="segundo" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="terceiro" />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.Label>Variante</Form.Label>
                                        <Form.Control as='select' custom>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label>Operação</Form.Label>
                                        <Form.Control as='select' custom>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Form.Control>
                                    </Col>

                                </Form.Row>
                            </Form.Group>
                            <Button variant="success">Enviar</Button>
                        </Form>
                    </Jumbotron>
                </Col>


            </Row>
        </Container>
    )
}