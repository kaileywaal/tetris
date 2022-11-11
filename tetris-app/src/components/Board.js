import React, { useState } from 'react';
import '../css/board.css'


function Board() {
    const buildBoard = (width, height) => {
      let board = []
      for(let i = 0; i < height; i++) {
        let row = [];
        for (let i = 0; i < width; i++) {
          row.push('')
        }
        board.push(row)
      }
      return board
    }

    const [board, setBoard] = useState(buildBoard(10, 20))

    return ( 
    <div>
        {board.map(row => {
        return (
          <div className='boardRow'>
            {row.map(() => {return <div className='boardBlock'></div>})}
          </div>
          )})}
    </div> );
}

export default Board;