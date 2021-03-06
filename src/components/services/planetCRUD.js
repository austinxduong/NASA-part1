/* eslint-disable max-len */
export const addPlanet = async (planet) => {
  const res = await fetch('https://whispering-citadel-46770.herokuapp.com/api/v1/planets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(planet)
  });

  if(res.status === 200) 
    alert('Planet has been added :D'); window.location.href = '/planets';

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

  if(res.status === 200) 
    alert('This planet is now deleted'); window.location.href = '/planets';

};

