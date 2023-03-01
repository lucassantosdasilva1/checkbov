import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Radio, Text } from "@ant-design/react-native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 15px;
  background-color: ${({theme}) => theme.colors.primary_background};
`;

export const Input = styled(TextInput)`
  background-color: ${({theme}) => theme.colors.secondary_background};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_button};
  font-size: 16px;
  padding: 8px;
  margin-bottom: 16px;
`;

export const Label = styled(Text)`
  font-size: ${RFValue(14)}px;
  /* font-weight: bold; */
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary_text};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;

  margin-top: -16px;
  margin-bottom: 16px;
`;

export const SubmitButton = styled.TouchableOpacity``;

export const RadioItem = styled(Radio)`
  color: ${({ theme }) => theme.colors.primary_button};

  margin-bottom: 8px;
`;

export const TextRadio = styled(Text)`
  font-size: ${RFValue(12)}px;
  /* font-weight: bold; */
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

