import React, { useState, useEffect } from 'react';
import { Col, Row, Container, CardDeck, Card, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsClipboardData, BsGraphUp } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import './styles.css';

export default function Home() {
    const [navigation, setNavigation] = useState([
        { id: '1', title: 'Dados', info: 'Dados cadastrados', icon: <BsClipboardData size={50} />, nav: '/tabela' },
        { id: '2', title: 'Indicador', info: 'Sobre o dispositivo', icon: <AiOutlineInfoCircle size={50} />, nav: '/indicator' },
        { id: '3', title: 'Gráfico', info: 'Sobre o dispositivo', icon: <BsGraphUp size={50} />, nav: '/graph' },
    ]);

    useEffect(() => {

    }, [])



    return (


        <Container fluid>
            <Row lg={true}>
                <Col lg='3' >
                    <Jumbotron>
                        <CardDeck style={{ textAlign: 'center', marginLeft: '2%' }}>
                            {navigation.map(dados => (
                                <Link to={dados.nav} style={{ textDecoration: 'none' }}>
                                    <Card style={{ marginBottom: '5%' }}>
                                        <Card.Body>
                                            <Card.Title>{dados.title}</Card.Title>
                                            {dados.icon}
                                            <Card.Text>
                                                {dados.info}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            ))}
                        </CardDeck>
                    </Jumbotron>

                </Col>
                <Col>
                    <div className="info">
                        <CardDeck>
                            <Card>
                                <Card.Title>Tempo de uso</Card.Title>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Title>Frequencia</Card.Title>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Title>Local</Card.Title>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </CardDeck>


                    </div>
                </Col>
            </Row>
        </Container >



    )
}