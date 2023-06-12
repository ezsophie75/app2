import React, { useState } from 'react';
import './App.css';
import Button from './Components/ui/Button/Button'

function App() {
  const [counter,setcounter] = useState(0) 
  console.log('rendu')
  return (
    <div className="App">
      Voici la valeur de couter :{counter}
      <hr/>
      <Button className="error" onclick={()=>{
        setcounter(counter -1)
        console.log(counter)
      }}>-1</Button>
      <Button onclick={()=>{
        setcounter(counter +1)
        console.log(counter)
      }}> +1
      </Button>
    </div>
  );
}

export default App;
