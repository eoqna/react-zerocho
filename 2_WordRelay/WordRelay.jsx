const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [ word, setWord ] = useState('제로초');
  const [ result, setResult ] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    let value = e.target.children.word.value;
    if(value === '') {
      setResult('단어를 입력하세요.');
      inputRef.current.focus();
      return;
    }
    
    if(value.substring(0, 1) === word.substring(word.length-1, word.length)) {
      setWord(value);
      setResult('딩동댕');
    } else {
      setResult('틀렸습니다. 다른 단어를 입력하세요.');
    }
    e.target.children.word.value = "";
    inputRef.current.focus();
  }

  return (
    <>
      <p>제시어 : {word}</p>
      <form onSubmit={onSubmitForm}>
        <input id="word" ref={inputRef} type="text" />
        <button>입력</button>
      </form>
      <p>{result}</p>
    </>
  )
}

module.exports = WordRelay;