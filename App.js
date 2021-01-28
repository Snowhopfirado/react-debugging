import React, {useState} from 'react';
import './App.css';


const App = () => {
  const [num, setNum] = useState({value: 0});
  
  return (
    <div>
      <button onClick = {() => {
        setNum(num.value + 1)
      }}>+ 1</button>
      <p>{num.value}</p>
    </div>
  )
}

export default App;
