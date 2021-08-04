import './App.css';
import { UserProvider } from './providers/UserProvider';
import Router from './router/Router';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />;
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
