/* eslint-disable max-len */
import React from 'react';
import styles from './Home.css';

const Landing = () => {
  return (
    <section className={styles.Landing}>
      <div className={styles.VideoContainer}>
        <video playsinline muted loop autoPlay src="https://res.cloudinary.com/duwtuqr0p/video/upload/v1628986566/galaxy_r3apjr.mp4"/>
      </div>
    </section>
  );
};

export default Landing;