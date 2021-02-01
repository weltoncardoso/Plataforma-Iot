import { BrowserRouter } from 'react-router-dom';

import Routers from '../src/components/rotas';
import Header from '../src/components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
