import React, { useEffect, useState } from "react";
import "./TicTacToe.css";

// 0 1 2
// 3 4 5
// 6 7 8
/**
 * first create the bord
 *  there should be 3 row and for each row there should be 3 columns (square component)
 *
 */
function Square({ value, onclick }) {
  return (
    <button onClick={onclick} className="square">
      {value}
    </button>
  );
}

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);
  const [status, setStatus] = useState("");
  console.log(square);
  const clickHandler = (index) => {
    if (square[index]) return;
    const updatedSquare = [...square];
    updatedSquare[index] = xTurn ? "X" : "O";
    setXTurn((prev) => !prev);
    setSquare(updatedSquare);
  };

  const getwinner = (square) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      let [x, y, z] = winningPatterns[i];
      if (square[x] && square[x] === square[y] && square[x] === square[z])
        return square[x];
    }
    return null;
  };

  useEffect(() => {
    const result = getwinner(square);
    if (!result && square.every((item) => item !== ""))
      setStatus("This is a draw");
    else if (result) {
      setStatus(`${result} is the winner`);
    } else {
      setStatus(`The next player is ${xTurn ? "X" : "O"}`);
    }
  }, [square]);

  const resetHandler = () => {
    setSquare(Array(9).fill(""));
    setXTurn(true);
  };
  // console.log(status);

  return (
    <div className="ticTacToe">
      <h1>Tic Tac Toe</h1>
      <div className="ticTacToe__row">
        <Square value={square[0]} onclick={() => clickHandler(0)} />
        <Square value={square[1]} onclick={() => clickHandler(1)} />
        <Square value={square[2]} onclick={() => clickHandler(2)} />
      </div>
      <div className="ticTacToe__row">
        <Square value={square[3]} onclick={() => clickHandler(3)} />
        <Square value={square[4]} onclick={() => clickHandler(4)} />
        <Square value={square[5]} onclick={() => clickHandler(5)} />
      </div>
      <div className="ticTacToe__row">
        <Square value={square[6]} onclick={() => clickHandler(6)} />
        <Square value={square[7]} onclick={() => clickHandler(7)} />
        <Square value={square[8]} onclick={() => clickHandler(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default TicTacToe;
