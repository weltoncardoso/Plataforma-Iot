import React, {useState} from 'react';
import {Nav} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import { IconContext } from 'react-icons';
import './styles.css';
/* Sidebar adicionado Header, no momento este aquivo estea desativado. Para ativar basta colocar a tag no arquivo App.js <Sidebar/>*/

export default function Sidebar(){
    const [sidebar, setSaidebar] = useState(false);

    const showSidebar = () => setSaidebar(!sidebar)

    return(
        
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
        
    )
}