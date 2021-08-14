
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const Home = () => {
  return (
    <main className={styles.Home}>
      <h1> World 0f Galaxy</h1>
      <Link to="/planets"> Enter to see ... </Link>
    </main>
  );
};

export default Home;
