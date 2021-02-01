import React, { useState } from 'react';
import { Col, Row, Container, Jumbotron, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

import Tabela from '../../Pages/Table';
import Graph from '../../Pages/Graph';
import Map from '../../Pages/Map';
import Indi from '../../Pages/Indicator';

export default function Home() {

    const [componentes, setComponentes] = useState('');

    function handleComponentes(e) {
        let select = [<Tabela />, <Graph />, <Map />, <Indi />];
        if (e === '1') {
            setComponentes(select[0])
        }
        if (e === '2') {
            setComponentes(select[1])
        }
        if (e === '3') {
            setComponentes(select[2])
        }
        if (e === '4') {
            setComponentes(select[3])
        }

    }



    return (
        <Container>
            <Row>
                <Col>
                    <Dropdown onSelect={handleComponentes} onChange={handleComponentes}>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">Ferramentas</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey='1'>Tabela</Dropdown.Item>
                            <Dropdown.Item eventKey='2'>Gráficos</Dropdown.Item>
                            <Dropdown.Item eventKey='3'>Mapa</Dropdown.Item>
                            <Dropdown.Item eventKey='4'>Indicator</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

            </Row>

            <Col >
                {componentes}
            </Col>

        </Container>
    )
}