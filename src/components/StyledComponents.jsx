import styled from 'styled-components';

const StyledComponents = () => {
  return (
    <Container>
      <p>-- Styled Components --</p>
      <Button>Fly!</Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: teal;
  border: solid #fff;
  border-radius: 20px;
`;
const Button = styled.button`
  background-color: #acedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default StyledComponents;
