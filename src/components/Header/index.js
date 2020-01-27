import React from 'react';
import './style.css';

export default function Header() {
  return (
    <div>
      <h3 className="overlay_default_text">End</h3>
      <div className="overlay_labels">
        <div className="overlay_label overlay_label_live">
          LIVE
        </div>
        <div className="overlay_label overlay_label_viewers">
          <i className="far fa-eye"></i>
          <span className="overlay_viewers_number">11</span>
        </div>
      </div>
    </div>
  );
}