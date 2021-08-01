import { Link } from 'react-router-dom';
const Page2 = () => {
  const urlTest = '3gaga44';
  return (
    <div>
      <h1>This is Page2 page!</h1>
      <Link to={`/page2/${urlTest}`}>URL Parameter</Link>
    </div>
  );
};

export default Page2;
