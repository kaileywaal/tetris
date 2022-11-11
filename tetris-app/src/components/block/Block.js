import React, { Component, useState } from 'react';

function Block() {
    
    const [block, setBlock] = useState([['x','x','x'],
                                        [' ','x',' ']])
    
    const rotateRight = () => {
        let rows = block.length;
        let columns = block[0].length;

        let newRows = columns;
        let newColumns = rows;

        let newBlock = []

        for (let i = 0; i < newRows; i++) {
            let arrayToAdd = []
            for (let j = 0; j < newColumns; j++) {
                arrayToAdd.push(block[j][i]);
            }
            newBlock.push(arrayToAdd)
        }
        
        newBlock.map(row => {row.reverse()})
        
        setBlock(newBlock);

    }


    const rotateLeft = () => {
        let rows = block.length;
        let columns = block[0].length;

        let newRows = columns;
        let newColumns = rows;

        let reverseBlock = block
        reverseBlock.map(row => {row.reverse()})
        let newBlock = [];

        for (let i = 0; i < newRows; i++) {
            let arrayToAdd = []
            for (let j = 0; j < newColumns; j++) {
                arrayToAdd.push(reverseBlock[j][i]);
            }
            newBlock.push(arrayToAdd)
        }
        
        setBlock(newBlock);

    }
    
    return ( 
        <div onClick={rotateLeft} >
            {block.map(row => {
            return (
                <div className='boardRow'>
                {row.map((value) => {return <div className='boardBlock'>{value}</div>})}
                </div>
                )})}
        </div> 
     );
}

export default Block;