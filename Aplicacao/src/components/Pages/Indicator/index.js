import React from 'react'
import {Container} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'

export default function Indicator(){
    return(
        <ListGroup>
            <h1>Informações</h1>
            <ListGroup.Item>Dispositivo: </ListGroup.Item>
            <ListGroup.Item>TS: </ListGroup.Item>
            <ListGroup.Item>Latitude: </ListGroup.Item>
            <ListGroup.Item>Longitude</ListGroup.Item>
            <ListGroup.Item>Bateria: </ListGroup.Item>
        </ListGroup>
    )
}