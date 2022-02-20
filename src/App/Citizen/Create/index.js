import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from '../../Navbar';

import create from '../../../API/create';
import { setNotification } from '../../../actions/notification';

import './Create.css';

const Create = () => {
  const [state, setState] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handlePicture = (e) => {
    setState({
      ...state,
      picture: e.target.files[0],
    });
  };

  const handleClick = async () => {
    const response = await create('citizen', state);

    dispatch(setNotification(response));
  };

  return (
    <div id="create-citizen">
      <Navbar />
      <h1>Cadastrar munícipe</h1>
      <form>
        <input onChange={handleChange} name="name" placeholder="Nome completo" />
        <input onChange={handleChange} name="cpf" placeholder="Cadastro de Pessoa Física" />
        <input onChange={handleChange} name="cns" placeholder="Cartão Nacional de Saúde" />
        <input onChange={handleChange} name="email" placeholder="E-mail" />
        <input onChange={handleChange} name="phone" placeholder="Telefone" />
        <input onChange={handleChange} name="birth_date" type="date" placeholder="Data de nascimento" />
        <input onChange={handlePicture} className="picture" type="file" accept="image/*" multiple={false} />
        <div className="active-container">
          <label htmlFor="active">
            Ativo
            <input onChange={handleChange} type="radio" id="active" name="active" value={0} />
          </label>
          <label htmlFor="inactive">
            Inativo
            <input onChange={handleChange} type="radio" id="inactive" name="active" value={1} />
          </label>
        </div>
        <div className="button-container">
          <Link className="cancel" to="/">Cancelar</Link>
          <button className="submit" onClick={() => handleClick()} type="button">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
