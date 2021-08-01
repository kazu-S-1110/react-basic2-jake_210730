import { useParams } from 'react-router-dom';

const UrlParameter = () => {
  const { id } = useParams(); //useParamsを使うことでURLパラメータを取得することが可能
  const container = {
    border: 'solid 1px red',
  };

  return (
    <div style={container}>
      <h3>This is UrlParameter</h3>
      <p>{id}</p>
    </div>
  );
};

export default UrlParameter;
