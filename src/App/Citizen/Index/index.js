/* eslint-disable */

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from '../../Navbar';
import CitizenPicture from '../../CitizenPicture';

import { setCitizen } from '../../../actions/citizen';
import index from '../../../API/index';

import './Index.css';

const Citizens = () => {
  const [citizens, setCitizens] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(async () => {
    const result = await index('citizen', page);

    setCitizens(result);
  }, []);

  const dispatch = useDispatch();

  const handleSelectCitizen = async (id) => {
    dispatch(setCitizen({ id }));
  };

  const handleSelectPage = async (page) => {
    const result = await index('citizen', page);

    setCitizens(result);
  };

  if (!citizens) {
    return (
      <div id="citizens">
        <Navbar />
        <div>Loading!</div>
      </div>
    );
  };

  return (
    <div id="citizens">
      <Navbar />
      <h1>Munícipes</h1>
      <ul>
        {
          citizens.list.map((citizen) => (
            <li key={citizen.id}>
              <Link onClick={() => handleSelectCitizen(citizen.id)} to="/municipe">
                <CitizenPicture picture={citizen.picture.url} />
                <p>{citizen.name}</p>
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="pagination-container">
        <p>Páginas</p>
        <div className="pagination-buttons">
          {
            citizens.pages.map((page) => (
              <span key={page} onClick={() => handleSelectPage(page)}>{page + 1}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Citizens;
