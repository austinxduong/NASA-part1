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
