import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { SearchInput } from '../moreculres/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>This is Users page!</h2>
      <SearchInput />

      <SecondaryButton onClick={onClickSwitch}>Switch admin</SecondaryButton>

      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
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
