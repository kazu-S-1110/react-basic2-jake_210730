import styled from 'styled-components';

export const UserIconWithName = ({ user, isAdmin }) => {
  return (
    <SContainer>
      <SImage src={user.image} alt="prof img" />
      <SName>{user.name}</SName>
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
