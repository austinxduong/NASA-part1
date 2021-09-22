/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { usePlanet } from '../state/planet';
import PlanetForm from './PlanetForm';
import styles from './EditPlanet.css';
import { updatePlanet } from '../services/planetCRUD';
import VideoEdit from './VideoEditPlanet';

const EditPlanets = () => {
  const { id } = useParams();
  const history = useHistory();
  const { loading, planet } = usePlanet(id);
  const [newPlanet, setNewPlanet] = useState(null);

  if(loading && !newPlanet) return <h1>one moment please...</h1>;

  useEffect(() => {
    console.log(loading, planet);
    if(!loading) setNewPlanet(planet);
  }, [planet, loading]);

  const handleChange = ({ target }) => {
    setNewPlanet(prevPlanet => ({ ...prevPlanet, [target.name]:target.value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePlanet({ id, ...newPlanet });

    history.push(`/planets/${id}`);
  };

  return (
    <section className={styles.EditPlanets}>
      <VideoEdit />
      <h1> 🛠️  Edit This Planet</h1>
      <PlanetForm {...newPlanet} onChange={handleChange} onSubmit={handleSubmit} />
    </section>
  );
};

export default EditPlanets;
