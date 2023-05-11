import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './Components/Board/Board';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='board'>
      <Board />
    </div>
  </React.StrictMode>
);
