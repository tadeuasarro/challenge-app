import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from '../../Navbar';

import show from '../../../API/show';
import { setUpdate } from '../../../actions/update';

import './Show.css';

const Show = () => {
  const { addressId } = useSelector((state) => state).ids;

  const [address, setAddress] = useState({});

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUpdate(address));
  };

  useEffect(async () => {
    const result = await show('address', addressId);

    setAddress(result);
  }, []);

  return (
    <div id="address">
      <Navbar />
      <div className="navigation">
        <Link className="back button" to="/municipe">Voltar</Link>
      </div>
      <div>
        <h1>Munícipe</h1>
        <div className="grid">
          <p className="key">CEP: </p>
          <p className="value">{address.zipcode}</p>
          <p className="key">Logradouro: </p>
          <p className="value">{address.street}</p>
          <p className="key">Bairro:</p>
          <p className="value">{address.district}</p>
          <p className="key">Complemento:</p>
          <p className="value">{address.second_line}</p>
          <p className="key">Cidade:</p>
          <p className="value">{address.city}</p>
          <p className="key">Unidade Federativa:</p>
          <p className="value">{address.state}</p>
          <p className="key">Código IBGE:</p>
          <p className="value">{address.ibge}</p>
        </div>
      </div>
      <div className="edit-container">
        <button className="edit button" onClick={() => handleClick()} type="button">Editar</button>
      </div>
    </div>
  );
};

export default Show;
