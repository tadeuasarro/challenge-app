import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setUpdate } from '../../actions/update';
import { setCitizen } from '../../actions/citizen';
import { setAddress } from '../../actions/address';

import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUpdate(null));
    dispatch(setCitizen({ id: null }));
    dispatch(setAddress({ id: null }));
  };

  return (
    <div id="navbar">
      <Link onClick={() => handleClick()} to="/">Início</Link>
      <Link onClick={() => handleClick()} to="/municipe">Cadastrar</Link>
    </div>
  );
};

export default Navbar;
