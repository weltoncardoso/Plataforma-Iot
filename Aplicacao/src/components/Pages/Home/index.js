import React, { useState, useEffect } from 'react';
import { Col, Row, Container, CardDeck, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home() {
    const [navigation, setNavigation] = useState([
        { id: '1', title: 'Dados', info: 'Sou um card', icon: '', nav: '/tabela' },
        { id: '2', title: 'Indicador', info: 'Sou um card', icon: '', nav: '/indicator' },
        { id: '3', title: 'Gráfico', info: 'Sou um card', icon: '', nav: '/graph' },
    ]);

    useEffect(() => {

    }, [])



    return (


        <Container>
            <Row>
                <Col className="deck">
                    {navigation.map(dados => (
                        <Link to={dados.nav} style={{ textDecoration: 'none' }}>
                            <CardDeck>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{dados.title}</Card.Title>
                                        {dados.icon}
                                        {dados.info}
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </Link>
                    ))}
                </Col>
            </Row>
        </Container>



    )
}