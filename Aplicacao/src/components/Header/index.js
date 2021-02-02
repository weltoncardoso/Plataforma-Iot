import React, {useState} from 'react';
import './styles.css';
import {Dropdown} from 'react-bootstrap';
import './styles.css';
import Menu from '../Menu'

export default function Header(){  
    return(
        <header className="container">
            <Menu/>
        
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