import React from 'react';
import { RadioProps } from '@ant-design/react-native/lib/radio/Radio';


import {
  Container
} from './styles';

interface IRadioItemProps extends RadioProps {
  checked?: boolean;
  onChange?: () => void;
  children?: React.ReactNode;
}

export function RadioItem( {checked, onChange, children}: IRadioItemProps) {
  return (
    <Container 
      checked={checked}
      onChange={onChange}
    >
      {children}
    </Container>
  );
}