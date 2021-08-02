import { useHistory, useLocation } from 'react-router-dom';

const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location); //ページ遷移で渡されたものはこれで受け取る
  const { state } = useLocation();
  const history = useHistory();
  console.log(state);
  return (
    <div>
      <h1>This is Page1 Detail A</h1>
      {/* historyのgoBack関数、めっちゃ使えそう！ */}
      <button onClick={() => history.goBack()}>GoBack!</button>
    </div>
  );
};

export default Page1DetailA;
