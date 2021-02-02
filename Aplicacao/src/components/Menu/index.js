import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'
import './styles.css'

export default function Menu() {
    return (
        <>

            <Navbar collapseOnSelect expand='lg'>
                <Navbar.Brand><Link to="/">
                            <img src={Logo} width="100" height="100" />
                        </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="mr-auto">
                            <Link className="link" to="/" style={{ textDecoration: 'none' }}>Home</Link>
                            <Link className="link" to="/tabela" style={{ textDecoration: 'none' }}>Informações</Link>
                            <Link className="link" to="/graph" style={{ textDecoration: 'none' }}>Gráfico</Link>
                            <Link className="link" to="/indicator" style={{ textDecoration: 'none' }}>Indicador</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>

        </>
    )
}