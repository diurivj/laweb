import { useState } from 'react';
import { Card } from './Card';
import './App.css';

// 1. JSX -> Una funcion
// 2. Tiene que regresar algo, y ese algo tiene que ser jsx -> html
// 3. Exportar el componente
// 4. Solo puede regresar un nodo de HTML
// 5. class -> className

const initialState = [
  {
    name: 'Rick Sanchez',
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Morty Smith',
    img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    name: 'Summer Smith',
    img: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

export function App() {
  const [characters, setCharacters] = useState(initialState);
  const [characterName, setCharacterName] = useState('');
  const [characterImage, setCharacterImage] = useState('');

  function addCharacter() {
    const character = { name: characterName, img: characterImage };

    setCharacters(prevState => {
      return [...prevState, character];
    });

    setCharacterName('');
    setCharacterImage('');
  }

  return (
    <main>
      <section className='grid'>
        {characters.map(character => (
          <Card
            key={character.name}
            name={character.name}
            img={character.img}
          />
        ))}
      </section>
      <aside>
        <div className='input-form'>
          <label htmlFor='name'>Character name</label>
          <input
            type='text'
            id='name'
            value={characterName}
            onChange={e => setCharacterName(e.target.value)}
          />
        </div>
        <div className='input-form'>
          <label htmlFor='img'>Character image</label>
          <input
            type='text'
            id='img'
            value={characterImage}
            onChange={e => setCharacterImage(e.target.value)}
          />
        </div>
        <button onClick={addCharacter}>Add character</button>
      </aside>
    </main>
  );
}
