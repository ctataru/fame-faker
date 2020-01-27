import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <div>
      <div className="footer_comment_box">
        <span>Comment</span>
        <i className="fas fa-ellipsis-h footer_comment_box_elipsis"></i>
      </div>
      <div className="footer_icons">
        <i className="fas fa-sync footer_icon fa-lg"></i>
        <i className="far fa-smile footer_icon fa-lg"></i>
        <i className="far fa-grin footer_icon fa-lg"></i>
      </div>
    </div>
  );
}