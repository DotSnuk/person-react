import './Form.css';
// import { InputForm } from './Form';
import { useState } from 'react';

export function Header() {
  return <h1>People table</h1>
}

function Person(people) {
  console.log(people);
  return (
    people.props.map(p => {
      return (
        <tr key={p.id}>
          <td >{p.name}{p.age}</td>
        </tr>
      )
    })
  )
}

function Table(people) {
  return (
    <table>
      <tbody>
        {people.props.length === 0 ? 
        <tr><td>no people</td></tr>:
        Person(people) }
      </tbody>
    </table>
  )
}

function InputForm() {
  const [textInput, setTextInput] = useState('');
  const [ageInput, setAgeInput] = useState(30);
  const [id, setId] = useState(0);
  const [people, setPeople] = useState([]);

  const handleButton = (e) => {
    e.preventDefault();
    setPeople(p => {return [...p, {name: textInput, age: ageInput, id: id}]});
    setId(id + 1);
    setTextInput('');
    setAgeInput(30);
  }

  return (
    <>
      <form onSubmit={handleButton}>
        <input type='text' value={textInput} onChange={(event) => setTextInput(event.target.value)} /> 
        <input type='number' value={ageInput} onChange={(event) => setAgeInput(event.target.value)} />
        <input type='submit' value='Add' />
      </form>
      <Table props={people}/>
    </>
  )
}



export function App() {
  return (
    <InputForm />
  )
}
