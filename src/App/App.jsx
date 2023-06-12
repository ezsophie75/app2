import React from 'react';
import './App.css';
import Button from './Components/ui/Button/Button'

function App() {
  return (
    <div className="App">
      <Button text='cancel'></Button>
      <Button><img src='/img/ok_icon.png'/>ok</Button>
    </div>
  );
}

export default App;
