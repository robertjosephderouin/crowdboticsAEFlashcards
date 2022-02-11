import './App.css';

import React from 'react';

import Card from './Card';
import cards from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCard: 0,
      isFront: true,
    };
  }
  render() {
    if (this.state.currentCard <= -cards.length) this.state.currentCard = 0;
    const computedIndex =
      (this.state.currentCard + cards.length - 1) % cards.length;
    return (
      <div className="mainPage">
        <h1>Crowdbotics AE Vocabulary Flash Cards</h1>
        <div className="content">
          <Card
            content={
              this.state.isFront
                ? cards[computedIndex].front
                : cards[computedIndex].back
            }
          ></Card>
          <div className="buttons">
            <button
              onClick={() =>
                this.setState({
                  currentCard: Math.floor(Math.random() * cards.length),
                })
              }
            >
              Random
            </button>
            <button
              onClick={() =>
                this.setState({
                  isFront: !this.state.isFront,
                })
              }
            >
              Flip
            </button>
            <button
              onClick={() =>
                this.setState({
                  currentCard: this.state.currentCard - 1,
                  isFront: true,
                })
              }
            >
              Previous
            </button>
            <button
              onClick={() =>
                this.setState({
                  currentCard: this.state.currentCard + 1,
                  isFront: true,
                })
              }
            >
              Next
            </button>
          </div>
        </div>
        <footer>
          Message AE Robert on Slack with any questions or if you want to add or
          modify a flash card!
        </footer>
      </div>
    );
  }
}

export default App;
