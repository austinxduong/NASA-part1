import React from 'react';
import PropTypes from 'prop-types';
import styles from './Planets.css';

const Planet = ({ name, image }) => {
  return (
    <>
      <section className={styles.Planets}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </section>
    </>
  );
};

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Planet;

