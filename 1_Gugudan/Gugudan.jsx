const React = require('react');
const { useState, useRef } = React; 

const Gugudan = () => {
  const [ first, setFirst ] = useState(Math.floor(Math.random() * 9) + 1);
  const [ second, setSecond ] = useState(Math.floor(Math.random() * 9) + 1);
  const [ value, setValue ] = useState("");
  const [ result, setResult ] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second) {
      setFirst(Math.floor(Math.random() * 9) + 1);
      setSecond(Math.floor(Math.random() * 9) + 1);
      setValue('');
      setResult((prevResult) => {
        return '정답 : ' + value
      });
    } else {
      setValue('');
      setResult('땡');
    }
    inputRef.current.focus();
  }

  return (
    <>
      <p>{first} 곱하기 {second} 는?</p>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={onChangeInput} 
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  )
}

  module.exports = Gugudan;