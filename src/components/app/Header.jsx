/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return <header className={styles.Header}>
    <nav>
      <NavLink to ="/" 
        exact={true} 
        style={{ color:'white' }} 
        activeStyle={{ color:'#7da48a' }}>
        🏠 Home </NavLink>

      <NavLink to="/planets" 
        exact={true} 
        style={{ color:'white' }} 
        activeStyle={{ color:'#7da48a' }}>   
        🪐  All Planets </NavLink>

      <NavLink to="/planets/add" 
        exact={true} 
        style={{ color:'white' }} 
        activeStyle={{ color:'#7da48a' }}> 
      ➕  Add </NavLink>

      <NavLink to="/loophole"
        exact={true} 
        style={{ color:'white' }} 
        activeStyle={{ color:'#7da48a' }}> 
       🕊️  The Artist </NavLink>
    </nav>

    {/* <div className="Header Navi" id="navigation">
      <a href="/">🏠 Home</a>
      <a href="/planets">🪐  All Planets </a>
      <a href="/planets/add"> ➕  Add</a>
      <a href="/loopshole">🕊️  The Artist</a>
    </div> */}

  </header>;

};

export default Header;


{/* <section>
      <img src="https://github.com/austinxduong.png" alt="github profile pic"></img>
    </section> */}
