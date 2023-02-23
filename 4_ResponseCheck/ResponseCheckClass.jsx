import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: [],
  };

<<<<<<< HEAD
  timeout;
  startTime;
  EndTime;

=======
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
  onClickScreen = () => {
    const { state, message, result } = this.state;
    if(state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.',
      });
<<<<<<< HEAD
      this.timeout = setTimeout(() => {
=======
      setTimeout(() => {
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
        this.setState({
          state: 'now',
          message: '지금 클릭하세요.',
        });
<<<<<<< HEAD
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2 * 1000);
    } else if(state === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색에 클릭하세요!',
      });
      
    } else if(state === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime - this.startTime],
        }
      });
    }
  }
  
  onReset = () => {
    this.setState({result: [],})
  }
=======
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
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 
    ? null
<<<<<<< HEAD
    : 
    <>
      <div>평균 시간 : { result.reduce((a, c) => a + c) / result.length }ms</div>
      <button onClick={this.onReset}>리셋</button>
    </>
=======
    : <div>평균 시간 : { result.reduce((a, c) => a + c) / this.state.result.length }ms</div>

>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
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