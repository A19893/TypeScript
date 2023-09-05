import React,{useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface User {
name: string,
age: number
}
function App() {
 const [count,setCount] = useState<number>(0);
 const addTwo =  useCallback((): void =>setCount(prev => prev + 1),[])
  return (
   <>
   <h1>Preess Me!!{count}</h1>
   <button onClick={addTwo}>Add</button>
   </>
  );
}

export default App;
