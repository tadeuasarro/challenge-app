import PropTypes from 'prop-types';

import './CitizenPicture.css';

const CitizenPicture = ({ picture }) => (
  <div className="citizen-picture" style={{ backgroundImage: `url(${picture})` }} />
);

CitizenPicture.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default CitizenPicture;
