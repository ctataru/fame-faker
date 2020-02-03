import React from 'react';
import './style.css';

const FIVE_MINUTES = 1000 * 60 * 5;
const MINIMUM_VIEWERS = 200;
const MAXIMUM_VIEWERS = 600;

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { count: 303 };
  }

  componentDidMount() {
    this.changeViewerCount();
    setTimeout(() => clearInterval(this.interval), FIVE_MINUTES);
  }

  componentDidUpdate() {
    clearInterval(this.interval);
    this.changeViewerCount();
  }

  changeViewerCount() {
    const { count } = this.state;
    const time = Math.round(Math.random() * 2000) + 1000;
    const amountToModify = Math.round(Math.random() * 6);
    const newCount = Date.now() % 2 === 0 ? count + amountToModify : count - amountToModify;

    if (newCount >= MAXIMUM_VIEWERS || newCount <= MINIMUM_VIEWERS) return null;

    this.interval = setInterval(() => this.setState({ count: newCount }), time);
  }

  render() {
    return (
      <div>
        <h3 className="overlay_default_text">End</h3>
        <div className="overlay_labels">
          <div className="overlay_label overlay_label_live">
            LIVE
          </div>
          <div className="overlay_label overlay_label_viewers">
            <i className="far fa-eye"></i>
            <span className="overlay_viewers_number">{this.state.count}</span>
          </div>
        </div>
      </div>
    );
  }
}