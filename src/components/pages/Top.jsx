import styled from 'styled-components';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/users');
  };

  const onClickCommon = () => {
    setUserInfo({ isAdmin: false });
    history.push('/users');
  };

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
