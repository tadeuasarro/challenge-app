import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div id="navbar">
    <Link to="/">Início</Link>
    <Link to="/cadastro">Cadastrar</Link>
  </div>
);

export default Navbar;
