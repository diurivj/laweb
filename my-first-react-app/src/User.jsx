import { useEffect, useState } from 'react';
import { Card } from './Card';

export function User() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(r => r.json())
      .then(data => {
        setCharacter(data);
      });
  }, []);

  function handleName(e) {
    const value = e.target.value;
    setName(value);
  }

  function increment() {
    setCount(prevState => prevState + 1);
  }

  const showName = name !== '';

  return (
    <div>
      <label htmlFor='name'>Introduce tu nombre</label>
      {/* Input controlado */}
      <input
        type='text'
        id='name'
        name='name'
        value={name}
        onChange={handleName}
      />
      {showName ? <p>Tu nombre es {name}</p> : null}
      <button onClick={increment}>Count: {count}</button>

      {character ? (
        <div>
          <Card name={character.name} img={character.image} />
        </div>
      ) : null}
    </div>
  );
}
