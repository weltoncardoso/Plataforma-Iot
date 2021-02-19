import { BrowserRouter } from 'react-router-dom';
import React from 'react'

import Routers from '../src/rotas';
import Header from '../src/components/Header';
//import Side from '../src/components/SideBar';//Sidebar está sendo estudado para ser usado futuramente



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
