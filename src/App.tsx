import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  //let isMounted: boolean = true;

  useEffect(()=>{
      const interval = setInterval(()=>{setCounter(prev=> prev+1)}, 1000);
    
    return ()=>{
      clearInterval(interval)
    }
  }, []);

  return (
    <div className="App">
      <h1>Timer</h1>
      <div>{counter}</div>
    </div>
  );
}

export default App;
