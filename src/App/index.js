import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Citizens from './Citizens';
import Register from './Register';

import './App.css';

const App = () => (
  <div id="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Citizens />} exact />
        <Route path="/cadastro" element={<Register />} exact />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
