import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addPlanet } from '../services/planetCRUD';
import PlanetForm from './PlanetForm';
import styles from './AddPlanet.css';
import VideoAdd from './VideoAddPlanet';

const AddPlanet = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [moons, setMoons] = useState('');
  const [image, setImage] = useState('');
  const [namesake, setNamesake] = useState('');
  const [atmosphere, setAtmosphere] = useState('');
  const [planetType, setPlanetType] = useState('');
  const [planet, setPlanet] = useState('');

  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'moons':
        setMoons(target.value);
        break;
      case 'image':
        setImage(target.value);
        break;
      case 'namesake':
        setNamesake(target.value);
        break;
      case 'atmosphere':
        setAtmosphere(target.value);
        break;
      case 'planetType':
        setPlanetType(target.value);
        break;      
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlanet = await addPlanet({
      name,
      moons,
      image,
      namesake,
      atmosphere,
      planetType });

    setPlanet(newPlanet);
    history.push(`/planets/${newPlanet.id}`);
    
  };

  return (
    <section className={styles.AddPlanet}>
      <VideoAdd />
      <h1> ➕ ADD A PLANET </h1>
      <PlanetForm {...planet} onChange={handleChange} onSubmit={handleSubmit} />
    </section>
  );
};

export default AddPlanet;
