
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Landing from './Landing';

const Home = () => {
  return (
    <main className={styles.Home}>
      <Landing />
      <h1> World 0f Galaxy</h1>
      <Link to="/planets"> Enter to see ... </Link>
    </main>
  );
};

export default Home;
