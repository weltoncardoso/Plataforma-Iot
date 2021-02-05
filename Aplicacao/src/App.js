import { BrowserRouter } from 'react-router-dom';
import React from 'react'

import Routers from '../src/components/rotas';
import Header from '../src/components/Header';
import Side from '../src/components/SideBar';
import Menu from '../src/components/Menu'
import api from './components/Connections/api';

function App() {
  return (
    <BrowserRouter>
      <Header data={api} />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
