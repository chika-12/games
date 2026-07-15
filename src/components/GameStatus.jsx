import React from 'react';
export const GameStatus = ({ restart, won }) => {
  return (
    <div className={`game-status ${won ? 'win' : 'lose'}`}>
      {won ? <h1>🎉 You Win!</h1> : <h1>💀 Game Over</h1>}
      <button onClick={restart}>Restart</button>
    </div>
  );
};
