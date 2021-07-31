import logo from './logo.svg';
import './App.css';
import { useState, useCallback } from 'react';
import ChildArea from './components/ChildArea';
import InlineStyle from './components/InlineStyle';
import CssModules from './components/CssModules';
import StyledJsx from './components/StyledJsx';

function App() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);
  //関数をメモ化するのがusecallback
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={countUp}>Count UP</button>
        <br />
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={() => setOpen(!open)}>display</button>
        <ChildArea open={open} handleClose={handleClose} />
        <InlineStyle />
        <CssModules />
        <StyledJsx />
      </header>
    </div>
  );
}

export default App;
