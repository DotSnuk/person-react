import { useState } from 'react';

export function InputForm({ handleButton }) {
  const [textInput, setTextInput] = useState('');
  const [ageInput, setAgeInput] = useState(30);

  function handleSubmit(e) {
    e.preventDefault();
    handleButton(textInput, parseInt(ageInput, 10));
    setTextInput('');
    setAgeInput(30);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={textInput}
          onChange={event => setTextInput(event.target.value)}
        />
        <input
          type='number'
          value={ageInput}
          onChange={event => setAgeInput(event.target.value)}
        />
        <input type='submit' value='Add' />
      </form>
    </>
  );
}
