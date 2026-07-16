import React, { useState } from 'react';
import words from './components/words';
import { LetterInput } from './components/LetterInput';
import { WrongLettersFunction } from './components/WrongLetters';
import { LiveDisplay } from './components/Lives';
import { WordDisplay } from './components/WordDisplay';
import { GameStatus } from './components/GameStatus';
import background from './assets/background.mp3';
export const App = () => {
  function pickRandomWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    return word;
  }
  const [secretWord, setWord] = useState(pickRandomWord().toLocaleLowerCase());
  const [guessLetter, setLetter] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const display = secretWord
    .split('')
    .map((letter) => {
      if (guessedLetters.includes(letter)) {
        return letter;
      } else {
        return '_';
      }
    })
    .join(' ');
  const lives = 7 - wrongLetters.length;
  const win = !display.includes('_');
  const audio = new Audio(background);
  //audio.play();
  function wordState() {
    setWord(pickRandomWord());
    setGuessedLetters([]);
    setWrongLetters([]);
  }
  function handleChange(event) {
    const letter = event.target.value;
    setLetter(letter.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      secretWord.includes(guessLetter) &&
      !guessedLetters.includes(guessLetter)
    ) {
      setGuessedLetters((prev) => [...prev, guessLetter]);
      document.body.classList.add('beep');
      setTimeout(() => {
        document.body.classList.remove('beep');
      }, 600);

      console.log('Correct');
    } else {
      if (
        !wrongLetters.includes(guessLetter) &&
        !guessedLetters.includes(guessLetter)
      ) {
        setWrongLetters((prev) => [...prev, guessLetter]);
      }
    }
    setLetter('');
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">
          <span className="title-emoji">🎯</span>
          Hangman Game
          <span className="title-emoji">🎯</span>
        </h1>
        <p className="game-subtitle">
          Guess the word before you run out of lives!
        </p>
        <div className="header-divider"></div>
      </div>
      {win || lives === 0 ? (
        <GameStatus restart={wordState} won={win} secretWord={secretWord} />
      ) : (
        <>
          <WordDisplay display={display} />

          <LetterInput
            value={guessLetter}
            changeCall={handleChange}
            submitCall={handleSubmit}
          />
          <br />
          <LiveDisplay lives={lives} />
          <WrongLettersFunction inCorrectLetters={wrongLetters} />
          <br />
        </>
      )}
    </div>
  );
};
