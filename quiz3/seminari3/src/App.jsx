import { use, useState } from 'react';
import './App.css'
import ToDoApp from './components/ToDoApp';

function App() {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const [userInput, setUserInput] = useState("");
  
  const increaseCount = () => {
    // setCount(count + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <>
    <ToDoApp />
      <h2>
        {count}
      </h2>
      <button onClick={increaseCount}>Increase Count</button>

      {isShow ? <div className='div-new'>{userInput}</div> : null}
      {/* {isShow && <div className='div-new'></div>} */}
      <button onClick={() => setIsShow(!isShow)}>Show / Hide</button>

      <div>
        <input 
        type="text" 
        placeholder='Input Your Text'
        onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
    </>
  )
}

export default App
