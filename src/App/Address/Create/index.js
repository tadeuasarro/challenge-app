import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNotification } from '../../../actions/notification';

import create from '../../../API/create';

import Navbar from '../../Navbar';

import './Create.css';

const Create = () => {
  const { citizenId } = useSelector((state) => state).ids;

  const [state, setState] = useState({ citizen_id: citizenId });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const response = await create('address', state);

    dispatch(setNotification(response));
  };

  return (
    <div id="create-address">
      <Navbar />
      <h1>Cadastrar endereço</h1>
      <form>
        <input onChange={handleChange} name="zipcode" placeholder="CEP" />
        <input onChange={handleChange} name="street" placeholder="Logradouro" />
        <input onChange={handleChange} name="second_line" placeholder="Complemento" />
        <input onChange={handleChange} name="district" placeholder="Bairro" />
        <input onChange={handleChange} name="city" placeholder="Cidade" />
        <input onChange={handleChange} name="state" placeholder="Unidade Federativa" />
        <input onChange={handleChange} name="ibge" placeholder="Código IBGE" />
        <div className="button-container">
          <Link className="cancel" to="/municipe">Cancelar</Link>
          <button className="submit" onClick={() => handleClick()} type="button">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
