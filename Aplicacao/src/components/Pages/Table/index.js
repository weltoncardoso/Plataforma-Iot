import React from 'react';
import { Container, Table } from 'react-bootstrap';


export default function Tabela() {
    return (
        <Container>
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
        </Container>
    )
}