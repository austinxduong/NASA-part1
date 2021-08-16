import React from 'react';
import Planet from './Planets';
import { Link } from 'react-router-dom';
import { usePlanets } from '../state/planet';
import styles from './PlanetsList.css';
import LandingTwo from '../forms/LandingTwo';


const PlanetsList = () => {
  const { planets, loading } = usePlanets();
  if(loading) return <h1>one moment please ...</h1>;

  const planetElements = planets.map(planet => (
    <li key={planet.id}>
      <Link to={`/planets/${planet.id}`}>
        <Planet {...planet}/>
      </Link>
    </li>

  ));
  return (
    <section className={styles.PlanetsList}>
      <LandingTwo />
      <h1> 🪐 All Planets </h1>
      <ul>{planetElements}</ul>
    </section>
  );
};

export default PlanetsList;
