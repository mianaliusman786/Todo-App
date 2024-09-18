import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Appname from './Component/Appname';
import Addtodo from './Component/Addtodo';
import Todoitem1 from './Component/Todoitem1';
import Todoitem2 from './Component/Todoitem2';

function App() {
  return (
    <div className="todo-container">
      <Appname />
      <div className='items-container'>
        <Addtodo />
        <Todoitem1 />
        <Todoitem2 />
      </div>
    
    </div>
  );
}

export default App;
