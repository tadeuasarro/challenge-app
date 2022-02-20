import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import update from '../../../API/update';
import { setUpdate } from '../../../actions/update';

import Navbar from '../../Navbar';

import './Update.css';

const Create = () => {
  const { citizenId } = useSelector((state) => state).ids;
  const { params } = useSelector((state) => state).update;

  const dispatch = useDispatch();

  const [state, setState] = useState({ citizen_id: citizenId });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = () => {
    update('address', state);

    dispatch(setUpdate(null));
  };

  return (
    <div id="update-address">
      <Navbar />
      <h1>Atualizar endereço</h1>
      <form>
        <input onChange={handleChange} value={params.zipcode} name="zipcode" placeholder="CEP" />
        <input onChange={handleChange} value={params.street} name="street" placeholder="Logradouro" />
        <input onChange={handleChange} value={params.second_line} name="second_line" placeholder="Complemento" />
        <input onChange={handleChange} value={params.district} name="district" placeholder="Bairro" />
        <input onChange={handleChange} value={params.city} name="city" placeholder="Cidade" />
        <input onChange={handleChange} value={params.state} name="state" placeholder="Unidade Federativa" />
        <input onChange={handleChange} value={params.ibge} name="ibge" placeholder="Código IBGE" />
        <div className="button-container">
          <button className="cancel" onClick={() => dispatch(setUpdate(null))} type="button">Cancelar</button>
          <button className="submit" onClick={() => handleClick()} type="button">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
