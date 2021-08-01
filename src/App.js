import logo from './logo.svg';
import './App.css';
import { useState, useCallback } from 'react';
import ChildArea from './components/ChildArea';
import InlineStyle from './components/InlineStyle';
import CssModules from './components/CssModules';
import StyledJsx from './components/StyledJsx';
import StyledComponents from './components/StyledComponents';
import Emotion from './components/Emotion';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

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
          <img src={logo} className="App-logo" alt="logo" />
          <p>{count}</p>
          <button onClick={countUp}>Count UP</button>
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
          {/* urlを変えてくれる */}
          <Link to="/">Home</Link>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
          {/* urlに応じてコンポーネントの表示を切り替えるのは以下のコード、exactを指定しないと他のものとマッチしないので注意。 */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
