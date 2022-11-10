import './App.css';
import {useState} from 'react';

function App() {
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
    <div className="App">
      {board.map(row => {
        return (
          <div className='boardRow'>
            {row.map(() => {return <div className='boardBlock'></div>})}
          </div>
          )})}
    </div>
  );
}

export default App;
