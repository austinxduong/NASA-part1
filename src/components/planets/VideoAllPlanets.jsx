/* eslint-disable max-len */
import React from 'react';
import styles from '../home/Home.css';

const VideoAll = () => {
  return (
    <section className={styles.VideoAll}>
      <div className={styles.VideoContainer3}>
        <video playsInline 
          muted 
          loop 
          autoPlay={true}
          src="/media/planets.mp4"
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

export default VideoAll;
