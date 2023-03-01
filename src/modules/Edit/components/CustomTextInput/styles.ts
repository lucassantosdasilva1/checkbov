import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)<TextInputProps>`
  background-color: ${({theme}) => theme.colors.secondary_background};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_button};
  padding: 8px;
  margin-bottom: 16px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color:  ${({ theme }) => theme.colors.primary_text}; 
`;
