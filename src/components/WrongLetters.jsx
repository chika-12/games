import React from 'react';
export const WrongLettersFunction = ({ inCorrectLetters }) => {
  return (
    <div className="wrong-letters">
      {' '}
      <h3>Wrong Guess:</h3>
      <h4>
        {inCorrectLetters.map((letter, index) => {
          return <span key={index}>{letter}</span>;
        })}
      </h4>
    </div>
  );
};
