const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
<<<<<<< HEAD
=======
  const [ input, setInput ] = useState('');
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
  const [ word, setWord ] = useState('제로초');
  const [ result, setResult ] = useState('');
  const inputRef = useRef(null);

<<<<<<< HEAD
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
=======
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
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
    inputRef.current.focus();
  }

  return (
    <>
      <p>제시어 : {word}</p>
      <form onSubmit={onSubmitForm}>
<<<<<<< HEAD
        <input id="word" ref={inputRef} type="text" />
=======
        <input ref={inputRef} type="text" value={input} onChange={onChangeWord} />
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
        <button>입력</button>
      </form>
      <p>{result}</p>
    </>
  )
}

module.exports = WordRelay;