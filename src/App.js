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
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/moreculres/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { DefaultLayout } from './components/templates/DefaultLayout';

function App() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);
  const user = {
    name: 'hogehoge',
    image: 'https://source.unsplash.com/random/200x200',
    email: 'XXXXX@test.com',
    tel: 'XXXXX',
    address: 'hogehoge',
    company: {
      name: 'test.com',
    },
  };
  return (
    <BrowserRouter>
      <DefaultLayout>
        <div className="App">
          <HeaderOnly>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <p>{count}</p>
          <button onClick={countUp}>Count UP</button> */}
            <br />
            {/* <input type="text" onChange={(e) => setText(e.target.value)} /> */}
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

            <Router />
          </HeaderOnly>

          <main>
            <PrimaryButton>test</PrimaryButton>
            <SecondaryButton>test</SecondaryButton>
            <br />
            <SearchInput />
            <br />
            <UserCard user={user} />
          </main>
        </div>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
