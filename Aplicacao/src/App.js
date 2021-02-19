import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routers from '../src/rotas';
import Header from '../src/components/Header';
import store from './store'
//import Side from '../src/components/SideBar';//Sidebar está sendo estudado para ser usado futuramente



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
