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

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

export default function FameFaker() {
  return (
    <div className="app">
      <div className="camera_view">
        <Webcam
          audio={false}
          mirrored={true}
          height={windowHeight}
          width={windowWidth}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="main_overlay">
        <Header />
        <Comments />
        <Footer />
      </div>
    </div>
  );
}
