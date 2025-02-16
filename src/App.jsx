import { useState } from "react";

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [bestOf, setBestOf] = useState(3);
  const [rounds, setRounds] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    checkWinner(newBoard);
  };

  const checkWinner = (newBoard) => {
    for (let combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        const newScore = { ...score, [newBoard[a]]: score[newBoard[a]] + 1 };
        setScore(newScore);
        setWinner(newBoard[a]);
        setRounds(r => r + 1);
        return;
      }
    }
    if (!newBoard.includes(null)) {
      setRounds(r => r + 1);
      setWinner("Empate");
    }
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  const resetGame = () => {
    setScore({ X: 0, O: 0 });
    setRounds(0);
    resetBoard();
  };

  const maxWins = Math.ceil(bestOf / 2);
  const hasSeriesWinner = score.X >= maxWins || score.O >= maxWins;
  const maxRoundsReached = rounds >= bestOf;
  const gameOver = hasSeriesWinner || maxRoundsReached;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-100 text-black rounded-lg p-6 shadow-lg w-full max-w-xs sm:max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">Jogo da Velha</h1>
        <div className="mb-4 flex space-x-4 justify-center">
          <button
            className={`px-3 py-2 rounded ${bestOf === 3 ? "bg-blue-700 text-white" : "bg-blue-500 text-white"}`}
            onClick={() => { setBestOf(3); resetGame(); }}
          >
            Melhor de 3
          </button>
          <button
            className={`px-3 py-2 rounded ${bestOf === 5 ? "bg-blue-700 text-white" : "bg-blue-500 text-white"}`}
            onClick={() => { setBestOf(5); resetGame(); }}
          >
            Melhor de 5
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {board.map((cell, index) => (
            <button
              key={index}
              className="w-12 h-12 sm:w-16 sm:h-16 text-xl sm:text-2xl font-bold flex items-center justify-center bg-gray-200 border rounded"
              onClick={() => handleClick(index)}
            >
              {cell}
            </button>
          ))}
        </div>
        <div className="text-lg font-semibold bg-gray-200 p-2 rounded mb-4 text-center">
          <p className="text-lg sm:text-xl font-bold">Placar</p>
          <p className="text-md sm:text-lg">X: {score.X} | O: {score.O}</p>
        </div>
        {winner && winner !== "Empate" && (
          <p className="text-lg text-green-600 text-center">{winner} venceu esta rodada!</p>
        )}
        {winner === "Empate" && (
          <p className="text-lg text-yellow-600 text-center">A rodada terminou em empate!</p>
        )}
        {gameOver ? (
          <div className="mt-4 text-center">
            {score.X > score.O ? (
              <p className="text-lg sm:text-xl font-bold text-red-600">X venceu a série!</p>
            ) : score.O > score.X ? (
              <p className="text-lg sm:text-xl font-bold text-red-600">O venceu a série!</p>
            ) : (
              <p className="text-lg sm:text-xl font-bold text-red-600">A série terminou em empate!</p>
            )}
            <button
              className="mt-2 px-3 py-2 bg-red-500 text-white rounded"
              onClick={resetGame}
            >
              Reiniciar Jogo
            </button>
          </div>
        ) : (
          winner && (
            <button
              className="mt-2 px-3 py-2 bg-green-500 text-white rounded w-full"
              onClick={resetBoard}
            >
              Próxima Rodada
            </button>
          )
        )}
      </div>
    </div>
  );
}