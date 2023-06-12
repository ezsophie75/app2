import React from 'react';
import './App.css';
import Button from './Components/ui/Button/Button'

function App() {
  return (
    <div className="App">
      <Button className="primary" onclick={()=> {console.log('fonction envoyée par le parent')}}><img src='/img/ok_icon.png' alt=''/>ok</Button>
      <Button className="error">cancel</Button>
    </div>
  );
}

export default App;
