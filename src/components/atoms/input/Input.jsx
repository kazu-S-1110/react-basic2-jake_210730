import styled from 'styled-components';

export const Input = ({ placeholder = 'searchInput' }) => {
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 2px;
  border-radius: 14px;
  outline: none;
  margin: 3px;
`;
