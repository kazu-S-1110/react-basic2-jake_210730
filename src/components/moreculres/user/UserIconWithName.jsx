import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../providers/UserProvider';

export const UserIconWithName = ({ user, isAdmin }) => {
  const context = useContext(UserContext);
  return (
    <SContainer>
      <SImage src={user.image} alt="prof img" />
      <SName>{user.name}</SName>
      <p>{context.contextName}</p>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaaaaa;
  cursor: pointer;
`;
