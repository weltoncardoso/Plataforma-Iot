import React from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Tabela() {
    return (
        <Container fluid>
            <Link to="/">
                <Button variant="light">Voltar</Button>
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