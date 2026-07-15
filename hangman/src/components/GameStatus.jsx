import React from 'react';
export const GameStatus = ({ restart, won, secretWord }) => {
  return (
    <div className={`game-status ${won ? 'win' : 'lose'}`}>
      {won ? (
        <h1>🎉 You Win!</h1>
      ) : (
        <h1>
          💀 Game Over <span>The word was "{secretWord}"</span>
        </h1>
      )}
      <button onClick={restart}>Restart</button>
    </div>
  );
};
