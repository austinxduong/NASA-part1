import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return <header className={styles.Header}>
    <nav>
      <NavLink to ="/">🏠 Home </NavLink>
      <NavLink to="/planets">   🪐  All Planets </NavLink>
      <NavLink to="/planets/add"> ➕  Add Planet</NavLink>
    </nav>
  </header>;

};

export default Header;
