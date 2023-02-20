import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: [],
  };

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if(state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.',
      });
      setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭하세요.',
        });
      }, Math.floor(Math.random() * 1000) + 2 * 1000);
    } else if(state === 'ready') {
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색에 클릭하세요!',
      })
    } else if(state === 'now') {
      this.setState({
        state: 'waiting',
        message: '클릭해서 시작하세요.',
        result: [],
      })
    }
  }

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 
    ? null
    : <div>평균 시간 : { result.reduce((a, c) => a + c) / this.state.result.length }ms</div>

  }

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;