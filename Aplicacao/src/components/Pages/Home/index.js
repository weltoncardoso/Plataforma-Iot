import React, { useState, useEffect } from 'react';
import { Col, Row, Container, CardDeck, Card, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsClipboardData, BsGraphUp } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Graph from '../../Pages/Graph';
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
                            <Card bg="danger" text='light'>
                                <Card.Body>
                                    <Card.Title>Temperatura</Card.Title>
                                    <Card.Text>
                                    <h1><strong>41ºC</strong></h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card bg="light">
                                <Card.Body>
                                    <Card.Title>Humidade</Card.Title>
                                    <Card.Text>
                                    <h1><strong>30%</strong></h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card bg="success" text='light'>
                                <Card.Body>
                                    <Card.Title>Bateria</Card.Title>
                                    <Card.Text>
                                    <h1><strong>90%</strong></h1>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <br></br>
                        <Card>
                            <Card.Body>
                                <Card.Title>Gráfico</Card.Title>
                                <Graph/>
                            </Card.Body>
                        </Card>


                    </div>
                </Col>
            </Row>
        </Container >



    )
}