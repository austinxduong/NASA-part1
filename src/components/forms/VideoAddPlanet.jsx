/* eslint-disable max-len */
import React from 'react';
import styles from '../home/Home.css';

const VideoAdd = () => {
  return (
    <section className={styles.VideoAdd}>
      <div className={styles.VideoContainer}>
        <video playsInline 
          muted 
          loop 
          autoPlay 
          src="https://nasa-front-end.s3.us-west-2.amazonaws.com/addPlanet.mp4"
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

export default VideoAdd;
