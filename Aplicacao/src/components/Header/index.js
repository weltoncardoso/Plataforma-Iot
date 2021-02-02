import React, {useState} from 'react';
import './styles.css';
import {Dropdown} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from '../SideBar/SidebarData';
import { IconContext } from 'react-icons';
import './styles.css';

export default function Header(){
    const [sidebar, setSaidebar] = useState(false);
    const showSidebar = () => setSaidebar(!sidebar)
    
    return(
        <header className="container">
            <IconContext.Provider value={{ color: '#FFF' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose size={20} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Nav>
      </IconContext.Provider>
        
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