import styled from 'styled-components';
import { SearchInput } from '../moreculres/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { useLocation } from 'react-router-dom';

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <SContainer>
      <h2>This is Users page!</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
`;

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hogehoge-${val}`,
    image: 'https://source.unsplash.com/random/200x200',
    email: 'XXXXX@test.com',
    tel: 'XXXXX',
    address: 'hogehoge',
    company: {
      name: 'test.com',
    },
  };
});

const SUserArea = styled.div`
  padding-top: 40px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 18px;
`;
