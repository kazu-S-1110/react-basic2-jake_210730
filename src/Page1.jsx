import { Link } from 'react-router-dom';
const Page1 = () => {
  return (
    <div>
      <h1>This is Page1!</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};

export default Page1;
