import { useState } from 'react';
import registerCitizen from './register_citizen';
import Navbar from '../Navbar';
import './Register.css';

const Register = () => {
  const [state, setState] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleClick = () => {
    registerCitizen(state);
  }

  return (
    <div id="register">
      <Navbar />
      <h1>Cadastrar munícipe</h1>
      <form>
        <input onChange={handleChange} name="name" placeholder="Nome completo" />
        <input onChange={handleChange} name="cpf" placeholder="Cadastro de Pessoa Física" />
        <input onChange={handleChange} name="cns" placeholder="Cartão Nacional de Saúde" />
        <input onChange={handleChange} name="email" placeholder="E-mail" />
        <input onChange={handleChange} name="phone" placeholder="Telefone" />
        <input onChange={handleChange} name="birth_date" type="date" placeholder="Data de nascimento" />
        <button onClick={() => handleClick()} type="button">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
