import { useParams, useLocation } from 'react-router-dom';

const UrlParameter = () => {
  const { id } = useParams(); //useParamsを使うことでURLパラメータを取得することが可能
  // const location = useLocation(); //useLocationを使うことでクエリパラメータを取得することが可能
  // console.log(location);
  const { search } = useLocation(); //この状態では?name=hogehogeとなるのでURLsearchParamsを使用する
  const query = new URLSearchParams(search);
  console.log(query.get('name')); //これでhogehogeが取得できる

  const container = {
    border: 'solid 1px red',
  };

  return (
    <div style={container}>
      <h3>This is UrlParameter</h3>
      <p>
        this parameter is <strong>{id}</strong>
      </p>
      <p>
        query parameter is <strong>{query.get('name')}</strong>
      </p>
    </div>
  );
};

export default UrlParameter;
