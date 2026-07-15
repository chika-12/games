import React from 'react';
export const LetterInput = ({ submitCall, changeCall, value }) => {
  return (
    <div className="letter-input">
      <form onSubmit={submitCall}>
        <input
          type="text"
          placeholder="Guess"
          maxLength={1}
          onChange={changeCall}
          value={value}
          autoFocus
        ></input>
        <br /> <br />
        <button type="submit">Submit Guess</button>
      </form>
    </div>
  );
};
