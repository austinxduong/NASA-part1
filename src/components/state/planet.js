import { useEffect, useState } from 'react';
import { fetchPlanet, fetchPlanets } from '../services/fetchApi';


export const usePlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchPlanets()
      .then(setPlanets)
      .then(setLoading(false));
  }, []);

  return { loading, planets };
};

export const usePlanet = (id) => {
  const [planet, setPlanet] = useState({});


  useEffect(() => {
    fetchPlanet(id).then(setPlanet);
  }, [id]);

  return planet;
};


