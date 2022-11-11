import React, { useState } from 'react';
import './graph.css'


function Graph() {
    const [board, setBoard] = useState([['','','','','','','',''],
                                        ['','','','','','','',''],
                                        ['','','','','','','',''],
                                        ['','','','','','','',''],
                                        ['','','','','','','',''],
                                        ['','','','','','','',''],
                                        ['','','','','','','',''],
                                        ['','','','','','','',''],
                                        ['','','','','','','',''],
                                        ['','','','','','','','']])

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

export default Graph;