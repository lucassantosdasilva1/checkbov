import styled from 'styled-components/native';
import profile from "@assets/images/profile.png";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FontAwesome } from "@expo/vector-icons";

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(60)}px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary_background};
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: 10px;

  border-bottom-width: 2px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-color: ${({ theme }) => theme.colors.primary_button};
  
`;

export const Content = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  padding: 0 16px;
  justify-content: center;
`;

export const InfoText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary_text};
`;