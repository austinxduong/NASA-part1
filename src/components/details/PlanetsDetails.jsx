import React from 'react';
import { useParams } from 'react-router';
import { usePlanet } from '../state/planet';
import styles from './PlanetDetails.css';

const PlanetDetails = () => {
  const { id } = useParams();
  const planet = usePlanet(id);

  if(!planet) return <h1>one moment please...</h1>;
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
    </figure>
  );
};

export default PlanetDetails;
