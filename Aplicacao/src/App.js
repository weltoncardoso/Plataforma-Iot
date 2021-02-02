import { BrowserRouter } from 'react-router-dom';

import Routers from '../src/components/rotas';
import Header from '../src/components/Header';
import Side from '../src/components/SideBar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
