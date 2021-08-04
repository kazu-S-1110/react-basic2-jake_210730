import styled from 'styled-components';
import { Card } from '../../atoms/card/Card';
import { UserIconWithName } from '../../moreculres/user/UserIconWithName';
export const UserCard = ({ user, isAdmin }) => {
  return (
    <Card>
      <UserIconWithName user={user} />
      <SDl>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>Tel</dt>
        <dd>{user.tel}</dd>
        <dt>Address</dt>
        <dd>{user.address}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  margin-bottom: 0;
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 45px;
    padding-bottom: 10px;
    overflow-wrap: break-word;
  }
`;
