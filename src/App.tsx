import React, {useEffect, useState, useCallback, useRef} from 'react';
import './App.css';

const Timer = () => {

  const [counter, setCounter] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const onMouseOver = useCallback(()=>{setShowTooltip(true)}, []);
  const onMouseOut = useCallback(()=>{setShowTooltip(false)}, []);
  
  useEffect(()=>{
    const interval = setInterval(()=>{setCounter(prev=> prev+1)}, 1000);
    tooltipRef.current?.addEventListener('mouseover', onMouseOver);
    tooltipRef.current?.addEventListener('mouseout', onMouseOut);
    return ()=>{
      clearInterval(interval)
    }
  }, []);

  return(
    <div >
    <h1>Timer</h1>
    <div>{counter}</div>
    <div ref={tooltipRef}>Tooltip{showTooltip && <div >future counter: {counter +1}</div>}</div>
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
