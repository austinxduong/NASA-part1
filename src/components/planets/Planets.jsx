import React from 'react';
import PropTypes from 'prop-types';

const Planet = ({ name, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </>
  );
};

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Planet;

