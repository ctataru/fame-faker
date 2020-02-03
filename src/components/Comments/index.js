import React from 'react';
import { DEFAULT_COMMENTS } from './default_comments';
import './style.css';

const FIVE_MINUTES = 1000 * 60 * 5;

export default class Comments extends React.Component {
  constructor() {
    super();
    this.state = { comments: [], allComments: DEFAULT_COMMENTS };

    this.commentDisplayInterval = this.commentDisplayInterval.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.commentDisplayInterval, 1000);
    setTimeout(() => clearInterval(this.interval), FIVE_MINUTES);
  }

  componentDidUpdate() {
    this.refreshComments();
    this.changeInterval();
  }

  refreshComments() {
    const { allComments } = this.state;
    if (allComments.length > 5) return;

    const existingComments = allComments.map(comment => comment.message);
    const allCommentsWithoutExisting = DEFAULT_COMMENTS.filter(comment => {
      return existingComments.indexOf(comment.message) === -1;
    })

    this.setState({ allComments: [...allComments, ...allCommentsWithoutExisting]})
  }

  changeInterval() {
    clearInterval(this.interval);
    const time = Math.round(Math.random() * 1000) + 500;
    this.interval = setInterval(this.commentDisplayInterval, time);
  }

  commentDisplayInterval() {
    let comments = [...this.state.comments];
    if (comments.length > 3) comments.pop();
    comments = [this.getRandomComment(), ...comments];
    this.setState({ comments });
  }

  getRandomComment() {
    const allComments = [...this.state.allComments];
    const totalComments = allComments.length;
    const commentIndex = Math.round(Math.random() * (totalComments - 1));

    const comment = allComments[commentIndex];
    allComments.splice(commentIndex, 1);
    this.setState({ allComments })

    return comment;
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
          if (moreThanTwo && index > 1) elementClassName += ' second_to_top_comment';
          if (moreThanThree && index > 2) elementClassName += ' top_comment';

          return (
            <li key={index} className={elementClassName}>
              <div className="photo_and_first_line">
                <img className="profile_picture" src={photo} />
                <p className="user_name">{name}</p>
              </div>
              <p className="user_message">{message}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}