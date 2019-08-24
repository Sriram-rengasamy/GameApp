import React from "react";
import Square from "./square";

const Board = props => {
  function renderSquares(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }
  return (
    <div>
      <div className="clearFix">
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(2)}
      </div>
      <div className="clearFix">
        {renderSquares(4)}
        {renderSquares(5)}
        {renderSquares(6)}
      </div>
      <div className="clearFix">
        {renderSquares(7)}
        {renderSquares(8)}
        {renderSquares(9)}
      </div>
    </div>
  );
};

export default Board;
