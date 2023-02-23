const React = require('react');

class WordRelay extends React.Component {
  state = {
    word: '제로초',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if(this.state.value === '') {
      this.input.focus();
      this.setState({
        result: '단어를 입력하세요.'
      })
      return;
    }

    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        word: this.state.value,
        result: '딩동댕',
        value: '',
      });
    } else {
      this.setState({
        result: '틀렸습니다.',
        value: ''
      })
    }
    this.input.focus();

  }

  onChangeWord = (e) => { 
    this.setState({value: e.target.value})
  }

  input;

  onRefInput = (c) => { this.input = c; }

  render() {
    return (
      <>
        <p>제시어 : {this.state.word}</p>
          <form onSubmit={this.onSubmitForm}>
            <input 
              ref={this.onRefInput} 
              type="text" 
              value={this.state.value} 
              onChange={this.onChangeWord}
            />
            <button>입력</button>
          </form>
        <p>{this.state.result}</p>
      </>
    )
  }

}

module.exports = WordRelay;