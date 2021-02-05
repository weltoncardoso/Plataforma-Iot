import React, { useState, useEffect } from 'react';
import './styles.css';
import { Dropdown } from 'react-bootstrap';
import './styles.css';
import { Link } from 'react-router-dom';
import Menu from '../Menu'
import Logo from '../assets/logo.svg';
import api from '../Connections/api';

export default function Header() {

    const [device, setDevice] = useState([]);

    useEffect(() => {
        handleDevices();
    }, [])

    async function handleDevices() {
        let devi = await ( await api.get('gps')).data.map((item, index) =>{
            return{
                ...item,
                key: index,
            }
        })
        setDevice(devi)
    }


    return (
        <header className="container">
            <Link to="/">
                <img src={Logo} width="100" height="100" />
            </Link>

            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">Devices</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.map((dev) => (
                        <Dropdown.Item>{dev.device}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

        </header>
    )
}