import { useState } from "react";
import GameBoard from "./components/Player/GameBoard";
import Player from "./components/Player/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectedButton() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectButton={handleSelectedButton}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
