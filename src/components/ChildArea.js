import { memo } from 'react';
//propsが変更されない限り再レンダリングしないようにするのがmemo
const ChildArea = memo((props) => {
  const { open, text, handleClose } = props;
  const data = [...Array(2000).keys()];
  console.log('childArea is rendered!');

  //再レンダリングされるタイミング
  // stateが更新された時
  // 親から渡されるpropsが変更された時
  // 親コンポーネントが再レンダリングされた時
  return (
    <>
      {open && (
        <div>
          <h1>child component</h1>
          <button onClick={handleClose}>close</button>
        </div>
      )}
    </>
  );
});

export default ChildArea;
