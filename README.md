markdown# Games

A growing collection of games, ranging from small terminal-based practice projects to full-stack web applications. This repo serves as both a portfolio of game development work and a sandbox for exploring game logic, architecture, and player experience design across different platforms.

## Overview

Each game in this repo lives in its own directory and is treated as an independent project — with its own dependencies, documentation, and (where applicable) deployment setup. Simpler games may start as CLI prototypes before evolving into full web applications.

## Games

| Game                                 | Type       | Stack                                  | Status         |
| ------------------------------------ | ---------- | -------------------------------------- | -------------- |
| [Word Guessing](./word-guessing)     | Word/Logic | Python (CLI) → planned React + Express | In Development |
| [Number Guessing](./number-guessing) | Logic      | Python (CLI)                           | Complete       |

_(Table will grow as new games are added.)_

## Repository Structure

games/
├── word-guessing/
│ ├── README.md
│ ├── src/
│ └── ...
├── number-guessing/
│ ├── README.md
│ └── ...
└── README.md # you are here

Each game folder is expected to contain its own `README.md` with game-specific setup instructions, rules, and architecture notes.

## Tech Stack (Across Projects)

- **Languages:** Python, JavaScript/TypeScript
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB (where persistence is needed)
- **Tooling:** Git, npm/Yarn

## Roadmap

- [ ] Migrate CLI prototypes into full-stack web apps
- [ ] Add persistent player accounts and score tracking
- [ ] Standardize a shared game-session pattern across projects (state management, win/loss handling)
- [ ] Deploy playable versions (Vercel/Railway)

## Getting Started

Each game is self-contained. Navigate into the relevant folder and follow its own `README.md` for setup and run instructions.

```bash
cd <game-folder>
# follow game-specific README
```

## Author

**Chika Ndukwe Mark**
Backend Engineer | [GitHub](https://github.com/chika-12)

## License

MIT
Given this structure, you'll want to reorganize your files to match — right now everything's flat under pgames/. Standard convention would be:
games/
├── word-guessing/
│ ├── word_guessing.py
│ ├── words.py
│ └── README.md
├── number-guessing/
│ ├── number_guessing.py
│ └── README.md
└── README.md
