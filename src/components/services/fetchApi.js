/* eslint-disable max-len */

// asynchronous fetch calls, returning raw json data

export const fetchPlanets = async () => {

  const res = await fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets', { mode: 'cors' });
 
  const json = await res.json();

  return json;
};



export const fetchPlanet = async (id) => {
  const res = await fetch(`https://whispering-citadel-46770.herokuapp.com/api/v1/planets/${id}`, { mode: 'cors' });
  const planet = await res.json();
  
  return planet;
};
