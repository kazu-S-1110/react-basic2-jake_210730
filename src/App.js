import logo from './logo.svg';
import './App.css';
import { useState, useCallback } from 'react';
import ChildArea from './components/ChildArea';
import InlineStyle from './components/InlineStyle';
import CssModules from './components/CssModules';
import StyledJsx from './components/StyledJsx';
import StyledComponents from './components/StyledComponents';
import Emotion from './components/Emotion';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './router/Router';

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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>{count}</p>
          <button onClick={countUp}>Count UP</button> */}
          <br />
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button onClick={() => setOpen(!open)}>display</button>
          <ChildArea open={open} handleClose={handleClose} />
          {open && (
            <>
              <InlineStyle />
              <CssModules />
              <StyledJsx />
              <StyledComponents />
              <Emotion />
            </>
          )}
          <Link to="/">Home</Link>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
          <Router />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
