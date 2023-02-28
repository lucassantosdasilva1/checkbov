import styled from "styled-components/native";
import theme from "@shared/theme";

import { darken } from "polished";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons/'; 


export const Container = styled.View`
  /* flex: 1; */
  width: 100%;
  height: ${RFValue(60)}px;
  /* margin-bottom: 10px; */
  /* background-color: ${({ theme }) => theme.colors.primary_background}; */
`;

export const CreateChecklistButton = styled(RectButton)`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.primary_button};

  justify-content: center;

  /* padding: 10px; */
  border-radius: 5px;
  align-items: center;
`;

export const CreateChecklistButtonIcon = styled(AntDesign).attrs({
  name: "plussquareo",
  color: theme.colors.primary_text,
})`
  font-size: ${RFValue(15)}px;
  margin-right: 10px;
`;


export const CreateChecklistButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;
