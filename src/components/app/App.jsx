/* eslint-disable max-len */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import PlanetsList from '../planets/PlanetsList';
import PlanetDetails from '../details/PlanetsDetails';
import Header from './Header';
import AddPlanet from '../forms/AddPlanet';


export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/planets" component={PlanetsList} />
        <Route exact path="/planets/add" component={AddPlanet} />
        <Route exact path="/planets/:id" component={PlanetDetails} />
      </Switch>
    </>
  );
}

// after wiring in very first component, dont forget to go back, and adjust index.js.
// the addplanet component does not route to a form. it routes to an empty details page. why?
