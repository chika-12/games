import React from 'react';
export function LiveDisplay({ lives }) {
  const dots = [];
  for (let i = 0; i < 7; i++) {
    dots.push(
      <span key={i} className={`life-dot ${i >= lives ? 'lost' : ''}`}></span>,
    );
  }

  return (
    <div className="lives-display">
      <h3>
        Lives: <span>{lives}</span>
      </h3>
      <div className="lives-indicator">{dots}</div>
    </div>
  );
}
