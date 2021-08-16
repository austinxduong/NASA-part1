/* eslint-disable max-len */
import React from 'react';
import styles from './Home.css';

const Landing = () => {
  return (
    <section className={styles.Landing}>
      <div className={styles.VideoContainer}>
        <video playsinline 
          muted 
          loop 
          autoPlay 
          src="https://res.cloudinary.com/duwtuqr0p/video/upload/v1629094685/fav.mp4"
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

export default Landing;
