import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ChildArea from './components/ChildArea';

function App() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={countUp}>Count UP</button>
        <br />
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={() => setOpen(!open)}>display</button>
        <ChildArea open={open} text={text} />
      </header>
    </div>
  );
}

export default App;
