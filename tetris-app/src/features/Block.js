import React, { Component, useState } from 'react';

function Block() {
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

    const [block, setBlock] = useState(getRandomBlock)

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


    // const rotateLeft = () => {
    //     let rows = block.length;
    //     let columns = block[0].length;

    //     let newRows = columns;
    //     let newColumns = rows;

    //     let reverseBlock = block
    //     reverseBlock.map(row => {row.reverse()})
    //     let newBlock = [];

    //     for (let i = 0; i < newRows; i++) {
    //         let arrayToAdd = []
    //         for (let j = 0; j < newColumns; j++) {
    //             arrayToAdd.push(reverseBlock[j][i]);
    //         }
    //         newBlock.push(arrayToAdd)
    //     }
        
    //     setBlock(newBlock);

    // }
    
    return ( 
        <div onClick={rotateRight} >
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