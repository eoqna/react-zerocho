import React, { Component } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while( candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonus = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  console.log(winNumbers);
  return [...winNumbers, bonus];
}

class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자
    winBalls: [],
    bonus: null, // 보너스 공
    redo: false,
  };

  timeouts = [];

  componentDidMount() {
    console.log('DidMount');
    this.runTimeouts();
  };
  
  runTimeouts = () => {
    const { winNumbers } = this.state;
    for( let i=0; i < winNumbers.length-1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          }
        });
      }, (i + 1) * 1000);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 7 * 1000);
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate');
    if(this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
  }
  
  componentWillUnmount() {
    console.log('WillUnmount');
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    })
  };
  
  onClickRedo = () => {
    console.log('onClickRedo');
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    const { winBalls, bonus, redo } = this.state; 
    return (
      <>
        <div>당첨 숫자</div>
        <div id="result">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스</div>
        {bonus && <Ball number={bonus} />}<br/>
        {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </>
    )
  }
}

export default Lotto;