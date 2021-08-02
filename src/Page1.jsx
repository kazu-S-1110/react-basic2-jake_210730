import { Link } from 'react-router-dom';
const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <div>
      <h1>This is Page1!</h1>
      {/* 遷移先にstateを渡す方法、遷移先ではuseLocationで受け取る */}
      <Link to={{ pathname: '/page1/detailA', state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};

export default Page1;
