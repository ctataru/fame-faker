import React from 'react';
import { DEFAULT_COMMENTS } from './default_comments';
import './style.css';

export default class Comments extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] };

    this.commentDisplayInterval = this.commentDisplayInterval.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.commentDisplayInterval, 1000);
    setTimeout(() => {
      clearInterval(this.interval);
      console.log(this.state.comments);
    }, 4000);
  }

  commentDisplayInterval() {
    let comments = [...this.state.comments];
    if (comments.length > 3) comments.shift();
    comments = [this.getRandomComment(), ...comments];
    this.setState({ comments });
  }

  getRandomComment() {
    const totalComments = DEFAULT_COMMENTS.length;
    const commentIndex = Math.round(Math.random() * (totalComments - 1));

    console.log('index', commentIndex);
    console.log('comment', DEFAULT_COMMENTS[commentIndex]);

    return DEFAULT_COMMENTS[commentIndex];
  }

  render() {
    const { comments } = this.state;
    const moreThanTwo = comments.length > 2;
    const moreThanThree = comments.length > 3;

    return (
      <ul className="comments_box">
        {this.state.comments.map((comment, index) => {
          const { name, message, photo } = comment;
          let elementClassName = 'comment_box';
          if (moreThanTwo && index > 2) elementClassName += ' second_to_top_comment';
          if (moreThanThree && index > 3) elementClassName += ' top_comment';
          return (
            <li className={elementClassName}>
              <p>{name}</p>
              <p>{message}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}