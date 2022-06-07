import { useEffect, useState } from 'react';
import { fetchPlanet, fetchPlanets } from '../services/fetchApi';

// managing state to fetch ALL planets
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



// managing state that fetches data, returns a planet:id
// the user can click on an individual planet, and see its' details
// displaying the key value properties of the API
export const usePlanet = (id) => {
  const [planet, setPlanet] = useState({});


  useEffect(() => {
    fetchPlanet(id).then(setPlanet);
  }, [id]);

  return planet;
};


