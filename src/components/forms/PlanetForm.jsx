/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetForm.css';
import { Link } from 'react-router-dom';

const PlanetForm = ({ name, moons, image, namesake, atmosphere, planetType, onChange, onSubmit }) => {

  return (
    <section className={styles.PlanetForm}>
      <form onSubmit={onSubmit}>
        <label>
        Name:
          <input
            required
            name="name"
            placeholder="whats the name of your planet?"
            value={name}
            onChange={onChange}
          />
        </label>

        <label>
        Moons:
          <input
            required
            name="moons"
            placeholder="how many moons does it have?"
            value={moons}
            onChange={onChange}
          />
        </label>

        <label>
        Image: 
          <input
            required
            name="image"
            placeholder="copy & paste external link of photo here!"
            value={image}
            onChange={onChange}
          />
        </label>

        <label>
        Namesake:
          <input
            required
            name="namesake"
            placeholder="what's the planet nickname? "
            value={namesake}
            onChange={onChange}
          />
        </label>

        <label>
        Atmosphere:
          <input
            required
            name="atmosphere"
            placeholder="what does it feel like living on this planet?"
            value={atmosphere}
            onChange={onChange}
          />
        </label>

        <label>
        Planet Type:
          <input
            required
            name="planetType"
            placeholder="whats the planet out made of?"
            value={planetType}
            onChange={onChange}
          />
        </label>

        <div>
          <button> + Add  </button>
        </div>
      </form>
      <Link to="/planets">  🔙  Go Back</Link>
    </section>
  );
};

PlanetForm.proptypes = {
  name: PropTypes.string,
  moons: PropTypes.string,
  image: PropTypes.string,
  namesake: PropTypes.string,
  atmosphere: PropTypes.string,
  planetType: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes. func.isRequired,

};

export default PlanetForm;

