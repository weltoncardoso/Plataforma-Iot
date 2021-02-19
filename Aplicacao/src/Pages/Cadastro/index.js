import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Jumbotron, Form, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function Cadastro() {
    const [cadastro, setCadastro] = useState('');
    const [variavel, setVariavel] = useState('');
    const [campos, setCampos] = useState([])


    function handleCampo() {
        setCampos(variavel)
        console.log(campos)

    }




    return (
        <Container fluid>
            <Link to="/">
                <Button variant="light" style={{ marginBottom: '2%' }}><IoMdArrowRoundBack size={30} /></Button>
            </Link>
            <Row lg="12">

                <Col>
                    <h3 style={{ textAlign: 'center' }}>Dados do Dispositivo</h3>
                    <Jumbotron>

                        <Form>
                            <Form.Row>
                                <Col lg="3">
                                    <Form.Control placeholder="Variavel" value={variavel} onChange={(e) => setVariavel(e.target.value)} maxLength={1} />
                                </Col>

                                <Col lg="1">
                                    <Form.Control as="select" custom>
                                        <option value='0'>{null}</option>
                                        <option value="1">Big</option>
                                        <option value="2">Little</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button variant="success" onClick={handleCampo}>Salvar</Button>
                                </Col>
                                {campos}
                            </Form.Row>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}