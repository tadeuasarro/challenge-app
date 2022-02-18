import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar';

import { setCitizen } from '../../actions/citizen';
import citizenIndex from './citizen_index';

import './Citizens.css';

const Citizens = () => {
  const [citizens, setCitizens] = useState([]);

  useEffect(async () => {
    const result = await citizenIndex();

    setCitizens(result);
  }, []);

  const dispatch = useDispatch();

  const handleClick = async (id) => {
    dispatch(setCitizen({ id }));
  };

  return (
    <div id="citizens">
      <Navbar />
      <h1>Munícipes</h1>
      <ul>
        {
          citizens.map((citizen) => (
            <li key={citizen.id}>
              <Link onClick={() => handleClick(citizen.id)} to="/municipe">{citizen.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Citizens;
