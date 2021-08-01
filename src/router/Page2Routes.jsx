import Page2 from '../Page2';
import UrlParameter from '../UrlParameter';

const Page1Routes = [
  {
    path: '/',
    exact: true,
    children: <Page2 />,
  },
  {
    path: '/:id', //:（コロン）を使用することで任意のものを受け取れる
    exact: false,
    children: <UrlParameter />,
  },
];

export default Page1Routes;
