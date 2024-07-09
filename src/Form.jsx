import { useState } from 'react'
import './Form.css'

export function Header() {
  return <h1>People table</h1>
}

export function ImportForm() {
  const [textInput, setTextInput] = useState('');
  const [ageInput, setAgeInput] = useState(30);

  const handleButton = (e) => {
    e.preventDefault();
    console.log(`${textInput} ${ageInput}`);
    setTextInput('');
    setAgeInput(30);
  }

  

  return (
    <form onSubmit={handleButton}>
      <input type='text' value={textInput} onChange={(event) => setTextInput(event.target.value)} /> 
      <input type='number' value={ageInput} onChange={(event) => setAgeInput(event.target.value)} />
      <input type='submit' value='Add' />
    </form>
  )
}










