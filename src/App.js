import React from 'react';
import logo from './logo.svg';

import Congrats from '../src/Congrats/Congrats.component';
import GuessedWords from '../src/GuessedWords/GuessedWords.component';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
