function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="palyer">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
