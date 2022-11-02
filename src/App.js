import React from 'react';
import './App.css';
import TodoList from './components/TodoList';


import { createData } from './createData'


const words = createData()

function App() {
  return (
    <div className='todo-app'>
      {words.map((word, index) => {
        return (
          <div key={index} style={{ display: "flex", flexDirection: 'row', margin: 10 }}>
            {word.list.map((str, index) => {
              return (
                <div key={str} style={{ flex: 1, color: 'white', margin: 5, background: 'red' }} onClick={()=> alert(str)} >{str}</div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default App;
