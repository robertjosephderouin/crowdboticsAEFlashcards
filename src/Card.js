import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="card">
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;
