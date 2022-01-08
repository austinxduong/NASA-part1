/* eslint-disable max-len */
import React from 'react';
import styles from '../home/Home.css';

const VideoEdit = () => {
  return (
    <section className={styles.VideoEdit}>
      <div className={styles.VideoContainer}>
        <video playsInline 
          muted 
          loop 
          autoPlay 
          src="/public/media/editPlanet.mp4"
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

export default VideoEdit;
