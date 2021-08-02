import { useHistory } from 'react-router-dom';
const Page404 = () => {
  const history = useHistory();
  return (
    <div>
      <h1>This is Page 404. this is not the web page you are looking for.</h1>
      <button onClick={() => history.push('/')}>Top</button>
    </div>
  );
};

export default Page404;
