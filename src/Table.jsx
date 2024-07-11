function Person(people, removePerson) {
  return people.map(p => {
    return (
      <tr key={p.id}>
        <td className='name'>{p.name}</td>
        <td className='age'>{p.age}</td>
        <RemoveButton id={p.id} removePerson={removePerson} />
      </tr>
    );
  });
}

function RemoveButton({ id, removePerson }) {
  const handleClick = e => {
    e.preventDefault();
    removePerson(id);
  };

  return (
    <td>
      <input
        onClick={e => {
          handleClick(e);
        }}
        type='button'
        value='X'
      />
    </td>
  );
}

export function Table({ people, removePerson }) {
  return (
    <table>
      <tbody>
        {people.length === 0 ? (
          <tr>
            <td>no people</td>
          </tr>
        ) : (
          Person(people, removePerson)
        )}
      </tbody>
    </table>
  );
}
