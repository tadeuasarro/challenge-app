import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from '../../Navbar';

import update from '../../../API/update';

import './Update.css';
import { setUpdate } from '../../../actions/update';

const Update = () => {
  const { params } = useSelector((state) => state).update;

  const dispatch = useDispatch();

  const [state, setState] = useState(params);

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

  const handleClick = () => {
    update('citizen', state);

    dispatch(setUpdate(null));
  };

  return (
    <div id="create-citizen">
      <Navbar />
      <h1>Atualizar munícipe</h1>
      <form>
        <input onChange={handleChange} value={state.name} name="name" placeholder="Nome completo" />
        <input onChange={handleChange} value={state.cpf.replace(/[.-]/g, '')} name="cpf" placeholder="Cadastro de Pessoa Física" />
        <input onChange={handleChange} value={state.cns.replace(/\s/g, '')} name="cns" placeholder="Cartão Nacional de Saúde" />
        <input onChange={handleChange} value={state.email} name="email" placeholder="E-mail" />
        <input onChange={handleChange} value={state.phone.replace(/[() ]/g, '')} name="phone" placeholder="Telefone" />
        <input onChange={handleChange} value={state.birth_date} name="birth_date" type="date" placeholder="Data de nascimento" />
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
          <button className="cancel" to="/" onClick={() => dispatch(setUpdate(null))} type="button">Cancelar</button>
          <button className="submit" onClick={() => handleClick()} type="button">Atualizar</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
