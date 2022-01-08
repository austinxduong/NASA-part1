/* eslint-disable max-len */
import React from 'react';
import styles from './Home.css';

const Landing = () => {
  return (
    <section className={styles.VideoHome}>
      <div className={styles.VideoContainer}>
        <video playsInline 
          muted 
          loop 
          autoPlay={true}
          src="/public/media/home.mp4"
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
