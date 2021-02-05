import React from 'react'
import { Container, Jumbotron, Card, Col, Row, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import './styles.css';

export default function Indicator() {
    return (
        <Container fluid>
            <Link to="/" >
                <Button variant="light" style={{ marginBottom: '2%' }}>Voltar</Button>
            </Link>
            <Jumbotron>

                <h1 className="titleInfo">Informações</h1>
                <Row>

                    <Col lg="3">

                        <Card style={{ marginTop: '6%' }}>
                            <Card.Body>
                                <Card.Img src={Logo} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>

                        <ListGroup>
                            <ListGroup.Item>Dispositivo: </ListGroup.Item>
                            <ListGroup.Item>Data: </ListGroup.Item>
                            <ListGroup.Item>Latitude: </ListGroup.Item>
                            <ListGroup.Item>Longitude</ListGroup.Item>
                            <ListGroup.Item>Bateria: </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>


            </Jumbotron>
        </Container>
    )
}