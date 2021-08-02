import { useLocation } from 'react-router-dom';

const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location); //ページ遷移で渡されたものはこれで受け取る
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>This is Page1 Detail A</h1>
    </div>
  );
};

export default Page1DetailA;
