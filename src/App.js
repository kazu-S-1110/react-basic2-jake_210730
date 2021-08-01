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
import Page1DetailA from './Page1DetailA';
import Page1DetailB from './Page1DetailB';
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
          {/* urlを変えてくれる */}
          <Link to="/">Home</Link>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
          {/* urlに応じてコンポーネントの表示を切り替えるのは以下のコード、exactを指定しないと他のものとマッチしないので注意。 */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* ネストのページを表現したい場合は以下の通り。page1が共通項なのでpropsの中からmatch:{url}を抜き出すと良い*/}
            <Route
              path="/page1"
              render={({ match: { url } }) => (
                <Switch>
                  {console.log(url)}
                  {/* 結果=> /page1 */}
                  {/* <Route path="/page1" exact> */}
                  <Route path={url} exact>
                    <Page1 />
                  </Route>
                  {/* <Route path="/page1/detailA"> */}
                  <Route path={`${url}/detailA`}>
                    <Page1DetailA />
                  </Route>
                  {/* <Route path="/page1/detailB"> */}
                  <Route path={`${url}/detailB`}>
                    <Page1DetailB />
                  </Route>
                </Switch>
              )}
            />

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
