/* eslint-disable max-len */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Landing from './VideoHome';

const Home = () => {
  return (
    <main className={styles.Home}>
      <Landing />
      <h1> World 0f Galaxy</h1>
      <Link to="/planets" 
        id="enter"
        className="enter-link"
        exact={true} 
        style={{ color:'#AA9992' }} 
        activeStyle={{ color:'orange' }}> 
        Enter to see ... </Link>
    </main>
  );
};

export default Home;
