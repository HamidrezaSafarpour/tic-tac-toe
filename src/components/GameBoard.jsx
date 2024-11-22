export default function GameBoard({ onSelectButton, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectedButton(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedArray = prevGameBoard;
  //     updatedArray[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedArray;
  //   });
  //   onSelectButton();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectButton(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
