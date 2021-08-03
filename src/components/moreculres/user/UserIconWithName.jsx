import styled from 'styled-components';

export const UserIconWithName = ({ user }) => {
  return (
    <SContainer>
      <SImage src={user.image} alt="prof img" />
      <SName>{user.name}</SName>
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
