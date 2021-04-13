import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }
  render() {
    const { secondsLeft } = this.state;
    if (secondsLeft === 0) {
      return <p>Boom!</p>;
    } else {
      return <p>{secondsLeft} seconds left before I go boom!</p>;
    }
  }
}
