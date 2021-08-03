import styled from 'styled-components';

export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #ffffff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
