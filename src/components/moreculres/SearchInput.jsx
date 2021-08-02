import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/Input';

export const SearchInput = () => {
  return (
    <div>
      <Input placeholder="Input Anything"></Input>
      <PrimaryButton>Search</PrimaryButton>
    </div>
  );
};
