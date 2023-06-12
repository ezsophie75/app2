import React from 'react';
import './App.css';
import Button from './Components/ui/Button/Button'

function App() {
  return (
    <div className="App">
      <Button><img src='/img/ok_icon.png'/>ok</Button>
      <Button>cancel</Button>
    </div>
  );
}

export default App;
