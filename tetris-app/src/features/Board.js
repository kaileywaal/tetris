import React, { useEffect, useState } from 'react';
import '../css/board.css'


function Board() {
  const boardWidth = 10;
  const boardHeight = 20;
  const blocks = [
    {
        shape: [['x','x','x'],
                [' ','x',' ']],
        color: 'purple'    
    },
    {
        shape: [['x','x'],
                ['x','x']],
        color: 'yellow'
    },
    {
        shape: [['x','x','x','x']],
        color: 'blue'
    },
    {
        shape: [['x',' ',' '],
                ['x','x','x']],
        color: 'indigo'    
    },
    {
        shape: [[' ',' ','x'],
                ['x','x','x']],
        color: 'orange'    
    },
    {
        shape: [['x','x',' '],
                [' ','x','x']],
        color: 'red'    
    },
    {
        shape: [[' ','x','x'],
                ['x','x',' ']],
        color: 'green'    
    },
    ]

    const getRandomBlock = () => {
        return blocks[Math.floor(Math.random() * blocks.length)].shape
    }


    const buildNewBoard = (width, height) => {
      let board = []
      for(let i = 0; i < height; i++) {
        let row = [];
        for (let i = 0; i < width; i++) {
          row.push(' ')
        }
        board.push(row)
      }
      return board
    }
    
    const setInitialActiveBlockPosition = () => {
      let initialActiveBlockPosition = [];
      let rows = activeBlock.length;
      let columns = activeBlock[0].length;
      
      for(let i=0; i<rows;i++) {
        for(let j=0; j<columns;j++) {
          if(activeBlock[i][j] == 'x') {
            initialActiveBlockPosition.push([i,j])
          }
        }
      }
      return initialActiveBlockPosition;
    }
    

    const updateBoard = () => {
      let updatedBoard = buildNewBoard(boardWidth, boardHeight);

      for(let i = 0; i < activeBlockPosition.length; i++) {
        updatedBoard[activeBlockPosition[i][0]][activeBlockPosition[i][1]] = 'x'
      }

      setBoard(updatedBoard);
    }

    const moveActiveBlockRight = () => {
      let validMove = true;
      let newActiveBlockPosition = [];
      for(let i = 0; i < activeBlockPosition.length; i++) {
        let currentCoordinates = activeBlockPosition[i];
        let newCoordinates = [currentCoordinates[0], currentCoordinates[1]+1]
        newActiveBlockPosition.push(newCoordinates);
        if(currentCoordinates[1] + 1 >= boardWidth) {
          validMove = false
        }
      }
      validMove ? setActiveBlockPosition(newActiveBlockPosition) : setActiveBlockPosition(activeBlockPosition);
    }

    const moveActiveBlockLeft = () => {
      let validMove = true;
      let newActiveBlockPosition = [];
      for(let i = 0; i < activeBlockPosition.length; i++) {
        let currentCoordinates = activeBlockPosition[i];
        let newCoordinates = [currentCoordinates[0], currentCoordinates[1]-1]
        newActiveBlockPosition.push(newCoordinates);
        if(currentCoordinates[1] - 1 < 0) {
          validMove = false
        }
      }
      validMove ? setActiveBlockPosition(newActiveBlockPosition) : setActiveBlockPosition(activeBlockPosition);
    }

    const handleKeyPress = (e) => {
      console.log("key pressed!")
      if(e.key == "Enter"){
        console.log("enter");
      }
    }
    //setTimeout(moveActiveBlockRight, 1000)




    
    
    const [activeBlock, setActiveBlock] = useState(getRandomBlock)
    const [activeBlockPosition, setActiveBlockPosition] = useState(setInitialActiveBlockPosition)
    const [board, setBoard] = useState(buildNewBoard(boardWidth, boardHeight))
    
    useEffect(() => {updateBoard()}, [activeBlock, activeBlockPosition])


    return ( 
    <div onKeyDown={handleKeyPress}>
        {board.map(row => {
        return (
          <div className='boardRow'>
            {row.map((value) => {return <div className='boardBlock'>{value}</div>})}
          </div>
          )})}
    </div> );
}

export default Board;