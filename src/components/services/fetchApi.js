/* eslint-disable max-len */
export const fetchPlanets = async () => {
  const res = await fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets');
  const json = await res.json();

  return json;
};

export const fetchPlanet = async (id) => {
  const res = await fetch(`https://whispering-citadel-46770.herokuapp.com/api/v1/planets/${id}`);
  const json = await res.json();
  
  return json;
};

