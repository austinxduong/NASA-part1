/* eslint-disable max-len */
import React from 'react';
import styles from '../home/Home.css';

const LandingThree = () => {
  return (
    <section className={styles.Landing3}>
      <div className={styles.VideoContainer3}>
        <video playsinline 
          muted 
          loop 
          autoPlay 
          src="https://res.cloudinary.com/duwtuqr0p/video/upload/v1629103656/fav5.mp4"
          style={{
            position:'fixed',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        />
      </div>
    </section>
  );
};

export default LandingThree;
