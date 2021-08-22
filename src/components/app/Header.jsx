/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return <header className={styles.Header}>
    <nav>
      <NavLink to ="/" exact={true} style={{ color:'#4E2C5D' }} activeStyle={{ color:'orange' }}>🏠 Home </NavLink>
      <NavLink to="/planets" exact={true} style={{ color:'#4E2C5D' }} activeStyle={{ color:'orange' }}>   🪐  All Planets </NavLink>
      <NavLink to="/planets/add" exact={true} style={{ color:'#4E2C5D' }} activeStyle={{ color:'orange' }}> ➕  Add Planet</NavLink>
    </nav>
  </header>;

};

export default Header;
