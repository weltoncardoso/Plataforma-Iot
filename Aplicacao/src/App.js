import { BrowserRouter } from 'react-router-dom';
import React from 'react'

import Routers from '../src/components/rotas';
import Header from '../src/components/Header';
import Side from '../src/components/SideBar';
import Menu from '../src/components/Menu'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
