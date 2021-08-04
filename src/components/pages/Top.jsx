import styled from 'styled-components';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () =>
    history.push({ pathname: '/users', state: { isAdmin: true } });
  const onClickCommon = () =>
    history.push({ pathname: '/users', state: { isAdmin: false } });

  return (
    <SContainer>
      <h2>This is TOP page!</h2>
      <SecondaryButton onClick={onClickAdmin}>admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickCommon}>common</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
