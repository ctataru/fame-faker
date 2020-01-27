import React from 'react';
import Webcam from 'react-webcam';

import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

const videoConstraints = {
  width: 375,
  height: 667,
  facingMode: "user"
};

export default function FameFaker() {
  return (
    <div className="app">
      <div className="camera_view">
        <div style={{ height: 667, weight: 375, backgroundColor: 'lightblue' }}></div>
        {/* <Webcam
          audio={false}
          height={667}
          width={375}
          videoConstraints={videoConstraints}
        /> */}
      </div>
      <div className="main_overlay">
        <Header />
        <Comments />
        <Footer />
      </div>
    </div>
  );
}
