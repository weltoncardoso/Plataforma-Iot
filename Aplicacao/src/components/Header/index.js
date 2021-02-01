import React from 'react';
import './styles.css';
import {Dropdown} from 'react-bootstrap';
import Logo from '../assets/logo.svg';

export default function Header(){
    return(
        <header className="container">
            <img src={Logo} width="100" height="100"/>
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