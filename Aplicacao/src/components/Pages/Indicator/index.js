import React from 'react'
import { Container, Jumbotron, Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Logo from '../../assets/logo.svg'

export default function Indicator() {
    return (
        <Container>
            <Jumbotron>
                
            <ListGroup>
                <h1>Informações</h1>
                <Card>
                <Card.Body>
                    <Card.Img src={Logo}/>
                </Card.Body>
                </Card>
                <ListGroup.Item>Dispositivo: </ListGroup.Item>
                <ListGroup.Item>TS: </ListGroup.Item>
                <ListGroup.Item>Latitude: </ListGroup.Item>
                <ListGroup.Item>Longitude</ListGroup.Item>
                <ListGroup.Item>Bateria: </ListGroup.Item>
            </ListGroup>
            </Jumbotron>
        </Container>
    )
}