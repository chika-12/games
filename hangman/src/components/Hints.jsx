// HintPanel.jsx
export function HintPanel({ hint, visible }) {
  if (!visible) return null;

  return (
    <div
      className="hint-panel"
      role="note"
      aria-live="polite"
      aria-label="Hint"
    >
      <span className="hint-label">💡Hint</span>
      <p className="hint-text">{hint}</p>
    </div>
  );
}
