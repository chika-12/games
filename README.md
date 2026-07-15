# 🎮 Games

A growing collection of interactive games exploring different platforms, languages, and player experiences. From terminal-based classics to modern web applications — each game is built as a standalone project with its own stack and architecture.

---

## 📦 Games

| Game                                 | Type          | Stack                          | Status            |
| ------------------------------------ | ------------- | ------------------------------ | ----------------- |
| [Hangman](./hangman)                 | Word Guessing | React + Vite                   | ✅ Complete       |
| [Word Guessing](./word-guessing)     | Word/Logic    | Python (CLI) → React + Express | 🚧 In Development |
| [Number Guessing](./number-guessing) | Logic         | Python (CLI)                   | ✅ Complete       |

---

## 📁 Repository Structure

games/
├── hangman/ # React Hangman game
│ ├── README.md
│ ├── src/
│ ├── public/
│ └── package.json
├── word-guessing/ # Python word game (CLI)
│ ├── README.md
│ ├── word_guessing.py
│ └── words.py
├── number-guessing/ # Python number game (CLI)
│ ├── README.md
│ └── number_guessing.py
└── README.md # You are here

text

Each game folder contains its own `README.md` with setup instructions, rules, and technical details.

---

## 🛠️ Tech Stack (Across Projects)

| Layer         | Technologies                   |
| ------------- | ------------------------------ |
| **Languages** | Python, JavaScript, TypeScript |
| **Frontend**  | React 18, Vite, CSS3           |
| **Backend**   | Node.js, Express (planned)     |
| **Database**  | MongoDB (planned)              |
| **Tooling**   | Git, npm, ESLint               |

---

## 🚀 Quick Start

Each game is self-contained. Navigate into any game folder and follow its README:

```bash
# Clone the repository
git clone https://github.com/chika-12/games.git
cd games

# Pick a game and follow its setup
cd hangman
npm install
npm run dev
🗺️ Roadmap
Convert Python CLI games to full-stack web apps

Add user accounts and score tracking

Implement shared game-state management pattern

Deploy playable versions (Vercel / Railway)

Add multiplayer support for select games

🤝 Contributing
This is a personal portfolio and learning sandbox, but feedback and suggestions are always welcome. Feel free to open an issue or reach out.

👨‍💻 Author
Chika Ndukwe Mark
Backend Engineer | GitHub
```
