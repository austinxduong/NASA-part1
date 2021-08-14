import { useEffect, useState } from 'react';
import { fetchPlanets } from '../services/fetchApi';


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


