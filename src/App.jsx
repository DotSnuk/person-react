import './Form.css';
import { InputForm } from './Form';
import { Table } from './Table';
import { useState } from 'react';

export function Header() {
  return <h1>People table. Bla</h1>;
}

export function App() {
  const [id, setId] = useState(0);
  const [people, setPeople] = useState([]);

  const handleButton = (name, age) => {
    setPeople(p => {
      return [...p, { name, age, id }];
    });
    setId(id + 1);
  };

  const removePerson = id => {
    setPeople(people => {
      return people.filter(p => p.id !== id);
    });
  };

  return (
    <>
      <InputForm handleButton={handleButton} />
      <Table people={people} removePerson={removePerson} />
    </>
  );
}
