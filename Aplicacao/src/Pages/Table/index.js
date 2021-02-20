import React from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io';


export default function Tabela() {
    return (
        <Container fluid>
            <Link to="/indicator">
                <Button variant="light"><IoMdArrowRoundBack size={30}/></Button>
            </Link>

            <Row lg={true} style={{marginTop:'2%'}}>
            
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Device</th>
                                <th>TS</th>
                                <th>Counter</th>
                                <th>Latitude</th>
                                <th>Longetude</th>
                                <th>Bateria</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>teste1</td>
                                <td>teste1</td>
                                <td>teste1</td>
                                <td>teste1</td>
                                <td>teste1</td>
                                <td>teste1</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}