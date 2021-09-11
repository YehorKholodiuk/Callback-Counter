import Fish from "./Fish";
import {useState} from 'react'

function App() {
const [count,setCount] =useState(5)
  const plus = () =>{
  setCount (count + 1)
  }
  const minus = () => {
  setCount (count - 1)
  }
  return (
    <div>
      {count}
      <Fish plus = {plus} minus = {minus}/>
    </div>
  );
}

export default App;

