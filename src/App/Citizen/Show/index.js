import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from '../../Navbar';

import show from '../../../API/show';
import { setAddress } from '../../../actions/address';
import { setUpdate } from '../../../actions/update';

import './Show.css';

const Citizen = () => {
  const [citizen, setCitizen] = useState(null);

  const { citizenId } = useSelector((state) => state).ids;

  const dispatch = useDispatch();

  useEffect(async () => {
    const result = await show('citizen', citizenId);

    dispatch(setAddress({ id: result.address_id }));

    setCitizen(result);
  }, []);

  if (!citizen) return <div>Loading!</div>;

  const handleClick = () => {
    dispatch(setUpdate(citizen));
  };

  return (
    <div id="citizen">
      <Navbar />
      <div className="navigation">
        <Link className="back button" to="/">Voltar</Link>
        <Link className="address button" to="/endereco">Endereço</Link>
      </div>
      <div>
        <h1>Munícipe</h1>
        <div className="grid">
          <p className="key">Nome completo: </p>
          <p className="value">{citizen.name}</p>
          <p className="key">CPF:</p>
          <p className="value">{citizen.cpf}</p>
          <p className="key">CNS:</p>
          <p className="value">{citizen.cns}</p>
          <p className="key">E-mail:</p>
          <p className="value">{citizen.email}</p>
          <p className="key">Telefone:</p>
          <p className="value">{citizen.phone}</p>
          <p className="key">Nascimento:</p>
          <p className="value">{citizen.birth_date}</p>
        </div>
      </div>
      <div className="edit-container">
        <button className="edit button" onClick={() => handleClick()} type="button">Editar</button>
      </div>
    </div>
  );
};

export default Citizen;
