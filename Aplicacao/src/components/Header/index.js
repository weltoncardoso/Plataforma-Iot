import React, {useState} from 'react';
import './styles.css';
import {Dropdown} from 'react-bootstrap';
import './styles.css';
import {Link} from 'react-router-dom';
import Menu from '../Menu'
import Logo from '../assets/logo.svg';

export default function Header(){  
    return(
        <header className="container">
            <Link to="/">
            <img src={Logo} width="100" height="100"/>
            </Link>
        
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">Devices</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Device 1</Dropdown.Item>
                    <Dropdown.Item>Device 2</Dropdown.Item>
                    <Dropdown.Item>Device 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
        </header>
    )
}