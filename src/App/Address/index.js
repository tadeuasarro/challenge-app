import { useState } from 'react';
import { useSelector } from 'react-redux';

import addressCreate from './address_create';

import Navbar from '../Navbar';
import './Address.css';

const Address = () => {
  const { citizenId } = useSelector((state) => state).ids;

  const [state, setState] = useState({ citizen_id: citizenId });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = () => {
    addressCreate(state);
  };

  return (
    <div id="address">
      <Navbar />
      <h1>Cadastrar endereço</h1>
      <form>
        <input onChange={handleChange} name="zipcode" placeholder="zipcode" />
        <input onChange={handleChange} name="street" placeholder="street" />
        <input onChange={handleChange} name="second_line" placeholder="second_line" />
        <input onChange={handleChange} name="district" placeholder="district" />
        <input onChange={handleChange} name="city" placeholder="city" />
        <input onChange={handleChange} name="state" placeholder="state" />
        <input onChange={handleChange} name="ibge" placeholder="ibge" />
        <button onClick={() => handleClick()} type="button">Cadastrar</button>
      </form>
    </div>
  );
};

export default Address;
