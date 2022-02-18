import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Citizens from './Citizens';
import Register from './Register';
import Citizen from './Citizen';
import Address from './Address';

import './App.css';

const App = () => (
  <div id="app">
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
        <Route path="/municipe" element={<Citizen />} />
        <Route path="/endereco" element={<Address />} />
        <Route path="/" element={<Citizens />} exact />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
