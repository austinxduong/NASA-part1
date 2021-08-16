/* eslint-disable max-len */
export const addPlanet = async (planet) => {
  const res = await fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(planet)
  });

  const post = await res.post();

  return post;
};

export const updatePlanet = async (planet) => {
  const res = await fetch(`https://whispering-citadel-46770.herokuapp.com/api/v1/planets/${planet.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(planet)
  });

  const put = await res.put();

  return put;

};

export const deletePlanet = async (id) => {
  const res = await fetch(`https://whispering-citadel-46770.herokuapp.com/api/v1/planets/${id}`, {
    method: 'DELETE'
  });
  const json = await res.json();

  return json;

};

