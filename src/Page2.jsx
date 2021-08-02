import { Link } from 'react-router-dom';
const Page2 = () => {
  const urlTest = '3gaga44';
  const queryParams = 'hogehoge';

  return (
    <div>
      <h1>This is Page2 page!</h1>
      <Link to={`/page2/${urlTest}`}>URL Parameter</Link>
      <br />
      <Link to={`/page2/${urlTest}?name=${queryParams}`}>Query Parameter</Link>
    </div>
  );
};

export default Page2;
