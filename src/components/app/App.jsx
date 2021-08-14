/* eslint-disable max-len */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import PlanetsList from '../planets/PlanetsList';


export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/planets" component={PlanetsList} />
      </Switch>
    </>
  );
}

// after wiring in very first component, dont forget to go back, and adjust index.js.
