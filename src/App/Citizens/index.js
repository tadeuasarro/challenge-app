import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import citizenIndex from './citizen_index';
import './Citizens.css';

const Citizens = () => {
  const [citizens, setCitizens] = useState([]);

  useEffect(async () => {
    const result = await citizenIndex();

    setCitizens(result);
  }, []);

  return (
    <div id="citizens">
      <Navbar />
      <h1>Munícipes</h1>
      <ul>
        {
          citizens.map((citizen) => (
            <li key={citizen.id}>{citizen.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Citizens;
