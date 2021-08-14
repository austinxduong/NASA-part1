import React from 'react';
import Planet from './Planets';
import { Link } from 'react-router-dom';

const PlanetsList = () => {
  const { planets, loading } = usePlanets();

  const planetElements = planets.map(planet => (
    <li key={planet.id}>
      <Link to={`/planets/${planet.id}`}>
        <Planet {...planet}/>
      </Link>
    </li>

  ));

  if(loading) return <h1>En Route...</h1>;
  return (
    <section className={StyleSheet.PlanetsList}>
      <h1> All Planets </h1>
      <ul>{planetElements}</ul>
    </section>
  );
};

export default PlanetsList;
