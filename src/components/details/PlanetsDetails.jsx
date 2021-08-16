/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router';
import { usePlanet } from '../state/planet';
import styles from './PlanetDetails.css';
import { Link } from 'react-router-dom';

const PlanetDetails = () => {
  const { id } = useParams();
  const planet = usePlanet(id);

  return (
    <figure className={styles.PlanetDetails}>   
      <h1>{planet.name}</h1>
      <img src={planet.image} alt={planet.name} />
      <figcaption>
        <p> Moons: {planet.moons}</p>
        <p> Namesake: {planet.namesake}</p>
        <p> Atmosphere: {planet.atmosphere}</p>
        <p> Planet type: {planet.planetType}</p>
      </figcaption>
      <nav>
        <Link to="/planets"><button>🔙  Go Back </button></Link>
        <Link to={`/planets/${planet.id}/edit`}><button>🛠️  Edit </button></Link>
      </nav>
    </figure>
  );
};

export default PlanetDetails;
