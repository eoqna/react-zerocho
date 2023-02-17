const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [ input, setInput ] = useState('');
  const [ word, setWord ] = useState('제로초');
  const [ result, setResult ] = useState('');
  const inputRef = useRef(null);

  const onChangeWord = (e) => {
    setInput(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(input === '') {
      alert('단어를 입력해주세요.');
      inputRef.current.focus();
      return;
    }

    if(input.substring(0, 1) === word.substring(word.length-1, word.length)) {
      setWord(input);
      setInput('');
      setResult('딩동댕');
    } else {
      setInput('');
      setResult('틀렸습니다. 다른 단어를 입력하세요.');
    }
    inputRef.current.focus();
  }

  return (
    <>
      <p>제시어 : {word}</p>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} type="text" value={input} onChange={onChangeWord} />
        <button>입력</button>
      </form>
      <p>{result}</p>
    </>
  )
}

module.exports = WordRelay;