import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/page1">Page1</SLink>
      <SLink to="/page2">Page2</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
`;

const SLink = styled(Link)`
  margin: 0 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
`;
