import React, {useEffect, useState, useCallback} from 'react';
import './App.css';

const Timer = () => {

  const [counter, setCounter] = useState(0);
  
  useEffect(()=>{
    const interval = setInterval(()=>{setCounter(prev=> prev+1)}, 1000);
    
    return ()=>{
      clearInterval(interval)
    }
  }, []);

  return(
    <div >
    <h1>Timer</h1>
    <div>{counter}</div>
  </div>
  )
}

function App() {
  const [index, setIndex] = useState(0);

  const updateIndex = useCallback(()=>{setIndex(index+1)}, [index])
  return (
    <div className="App" key={index}>
     <Timer/>
    <button onClick={updateIndex}>Clear timer</button>
    </div>
  );
}

export default App;
