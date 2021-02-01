import React from 'react';
import * as BiDevices from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsGraphUp from 'react-icons/bs';
import * as BiMapPin from 'react-icons/bi';
import * as FiLogOut from 'react-icons/fi';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Informações',
    path: '/tabela',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Graficos',
    path: '/graph',
    icon: <BsGraphUp.BsGraphUp />,
    cName: 'nav-text'
  },
  {
    title: 'Indicador',
    path: '/indicator',
    icon: <BiDevices.BiDevices />,
    cName: 'nav-text'
  },
  {
      title:'Localização',
      path:'/map',
      icon:<BiMapPin.BiMapPin/>,
      cName:'nav-text'
  },
  {
      title:'Sair',
      path:'/sair',
      icon:<FiLogOut.FiLogOut/>,
      cName:'nav-text'
  }
    
];