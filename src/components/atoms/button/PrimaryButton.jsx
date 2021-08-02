import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const PrimaryButton = ({ children }) => {
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #7fecd8;
`;
