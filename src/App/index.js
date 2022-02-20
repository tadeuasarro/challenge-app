import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CitizenIndex from './Citizen/Index';
import Citizen from './Citizen';
import Address from './Address';
import Notification from './Notification';

import './App.css';

const App = () => (
  <div id="app">
    <Notification />
    <BrowserRouter>
      <Routes>
        <Route path="/municipe" element={<Citizen />} />
        <Route path="/endereco" element={<Address />} />
        <Route path="/" element={<CitizenIndex />} exact />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
