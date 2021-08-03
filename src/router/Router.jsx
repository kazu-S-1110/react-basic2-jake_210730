import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Top } from '../components/pages/Top';
import { Users } from '../components/pages/Users';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { HeaderOnly } from '../components/templates/HeaderOnly';
import Home from '../Home';
import Page404 from '../Page404';
import Page1Routes from './Page1Routes';
import Page2Routes from './Page2Routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/home">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {Page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />

        <Route
          path="/page2"
          render={({ match: { url } }) => (
            <Switch>
              {Page2Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        /> */}
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>

        {/* page404へのアクセスをルーティング */}
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
